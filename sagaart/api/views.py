import datetime as dt

from django.contrib.auth import get_user_model
from django_filters.rest_framework import DjangoFilterBackend
from djoser.conf import settings
from djoser.views import UserViewSet
from drf_spectacular.utils import extend_schema_view
from rest_framework import filters, generics, status, viewsets, mixins
from rest_framework.decorators import action
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import (IsAuthenticated,
                                        IsAuthenticatedOrReadOnly)
from rest_framework.response import Response

from algorithm.estimation import estimation, get_data
from api.constants import (ARTVORK_API_SCHEMA_EXTENSIONS,
                           ARTVORKS_API_SCHEMA_EXTENSIONS,
                           FAVORIRE_ARTIST_API_SCHEMA_EXTENSIONS,
                           FAVORITE_ARTVORK_API_SCHEMA_EXTENSIONS,
                           NEWS_API_SCHEMA_EXTENSIONS,
                           PERMISSIONS_USER,
                           SAFE_METHODS,
                           SUBSCRIPTION_API_SCHEMA_EXTENSIONS,
                           USER_API_SCHEMA_EXTENSIONS)
from api.messages import SUBSCRIPTIONS, ARTISTS
from api.permissions import IsAdminOrRead
from api.serializers import (ArtListSerializer, ArtObjectSerializer,
                             FavoriteSerializer, FavoriteArtworkSerializer,
                             NewsSerializer, SubscribeSerializer,
                             SubscribeUserSerializer, TestArtWrokSerializer)
from api.utils import get_object_by_filter
from artists.models import SeriesModel, FavoriteArtistModel
from artworks.models import (ArtistModel, ArtworkModel, ArtworkPriceModel,
                             FavoriteArtworkModel, StyleModel)
from news.models import NewsModel
from users.models import Subscribe, UserSubscribe


User = get_user_model()


@extend_schema_view(**SUBSCRIPTION_API_SCHEMA_EXTENSIONS)
class SubscribeViewSet(viewsets.ReadOnlyModelViewSet):
    """Представление для подписок"""
    queryset = Subscribe.objects.all()
    serializer_class = SubscribeSerializer

    def get_serializer_class(self, *args, **kwargs):
        if self.action == "subscribe":
            return SubscribeUserSerializer
        return super().get_serializer_class(*args, **kwargs)

    def get_permissions(self):
        permission_classes = [IsAdminOrRead,]
        if self.action == "subscribe":
            permission_classes = [IsAuthenticated, ]
        return [permission() for permission in permission_classes]

    @action(['post', 'delete'], detail=True)
    def subscribe(self, request, *args, **kwargs):
        user = request.user
        try:
            subscription = self.get_object()
        except Exception:
            return Response(
                {'ERROR': SUBSCRIPTIONS['no_subscribe']},
                status=status.HTTP_400_BAD_REQUEST)

        if request.method == 'POST':
            if UserSubscribe.objects.filter(user_id=user).exists():
                return Response(
                    {'ERROR': SUBSCRIPTIONS['exists']},
                    status=status.HTTP_403_FORBIDDEN
                )
            days = subscription.sub_time
            time_off = dt.datetime.now() + dt.timedelta(days)
            UserSubscribe.objects.create(
                user_id=user, subscribe=subscription, time_off=time_off
            )
            data_serializer = UserSubscribe.objects.get(user_id=user)
            serializer = self.get_serializer(data_serializer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        if request.method == "DELETE":
            try:
                user_sub = UserSubscribe.objects.get(
                    user_id=user, subscribe=subscription
                )
            except Exception:
                return Response(
                    {"ERROR": SUBSCRIPTIONS["no_subscribe"]},
                    status=status.HTTP_400_BAD_REQUEST,
                )
            user_sub.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)


@extend_schema_view(**USER_API_SCHEMA_EXTENSIONS)
class MainUserViewSet(UserViewSet):
    """Представление функционала пользователя"""
    def get_permissions(self):
        if self.action in PERMISSIONS_USER:
            self.permission_classes = settings.PERMISSIONS.me
        return super().get_permissions()

    def get_serializer_class(self, *args, **kwargs):
        if self.action == "my_subscription":
            return SubscribeUserSerializer
        return super().get_serializer_class(*args, **kwargs)

    @action(["get"], detail=False, permission_classes=[IsAuthenticated])
    def my_subscription(self, request, *args, **kwargs):
        user = request.user
        try:
            user_subscription = UserSubscribe.objects.get(user_id=user)
        except Exception:
            return Response(
                {"ERROR": SUBSCRIPTIONS["no_subscribe"]},
                status=status.HTTP_200_OK
            )
        serializer = self.get_serializer(user_subscription)
        return Response(serializer.data, status=status.HTTP_200_OK)


@extend_schema_view(**ARTVORKS_API_SCHEMA_EXTENSIONS)
class PaintingsAPIView(generics.ListCreateAPIView):
    """Представление для списка и создания арт-объекта"""
    queryset = ArtworkModel.objects.filter(is_on_sold='on sale')
    serializer_class = ArtListSerializer
    pagination_class = LimitOffsetPagination
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend, filters.SearchFilter,)
    filterset_fields = (
        'brushstrokes_material', 'size', 'decoration',
        'orientation', 'style', 'author')  # price
    search_fields = ('name',)
    http_method_names = ['get', 'delete']

    def post(self, request, *args, **kwargs):
        data = request.data
        try:
            author, create = ArtistModel.objects.get_or_create(
                name=data['artist']
            )
            style = get_object_by_filter(
                StyleModel, 'name', data['style']
            )
            series = get_object_by_filter(
                SeriesModel, 'name', data['series']
            )
            art = ArtworkModel.objects.create(
                name=data['title'],
                author=author,
                description=data['description'],
                image=data['imageUrl'],
                user_id=request.user.id,
                year=data['year'],
                size=data['size'],
                brushstrokes_material=data['brushstrokes_material'],
                orientation=data['orientation'],
                style=style,
                decoration=data['decoration'],
                author_signature=data['author_signature'],
                series=series
            )
            try:
                # получение цены с помощью алгоритма оценки
                data_for_estimate = get_data(
                    category=None, year=data['year'],
                    dimensions=data['size'],
                    materials=data['brushstrokes_material'],
                    author_name=data['artist']
                )
                price = estimation(data_for_estimate)
                ArtworkPriceModel.objects.create(
                    artwork=art, original_price=price
                )
                art.is_estimate = True
                art.save()
            except Exception:
                return Response(
                    {"Алгоритм оценки временно не работает,работа сохранена в базе без оценки"},
                    status=status.HTTP_201_CREATED
                )

            # price = ArtworkPriceModel.objects.filter(artwork=art)
            # art.price = price
        except Exception as er:
            return Response(
                {'Ошибка': f' Нет поля {er}'},
                status=status.HTTP_400_BAD_REQUEST
            )
        return Response(
            data=(request.data,),
            status=status.HTTP_201_CREATED
        )


@extend_schema_view(**ARTVORK_API_SCHEMA_EXTENSIONS)
class RetrieveArtObject(generics.RetrieveDestroyAPIView):
    """Представление для карточки арт-объекта"""
    queryset = ArtworkModel.objects.all().select_related('author')
    serializer_class = ArtObjectSerializer
    pagination_class = LimitOffsetPagination
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def delete(self, request, *args, **kwargs):
        artwork = ArtworkModel.objects.get(
            id=kwargs['pk']
        )
        if artwork.user_id == request.user.id:
            return super().delete(request, *args, **kwargs)
        return Response(
            {
                'Ошибка': 'Невозможно удалить чужой объект'
            }, status=status.HTTP_400_BAD_REQUEST
        )


class TestArtworkViewSet(viewsets.ModelViewSet):
    queryset = ArtworkModel.objects.filter(is_on_sold='on sale')
    serializer_class = TestArtWrokSerializer
    pagination_class = LimitOffsetPagination
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend, filters.SearchFilter,)
    filterset_fields = (
        'brushstrokes_material', 'size', 'decoration',
        'orientation', 'style', 'author')
    search_fields = ('name',)
    http_method_names = ['post']

    def list(self, request):
        result = self.queryset
        serializer = ArtListSerializer(result, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(['get'], True)
    def get(self, request):
        print(request.data)
        result = self.queryset.first()
        serializer = ArtObjectSerializer(result, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def perform_create(self, serializer):
        return serializer.save(
            user=self.request.user
        )


@extend_schema_view(**FAVORITE_ARTVORK_API_SCHEMA_EXTENSIONS)
class FavoriteArt(viewsets.ModelViewSet):
    '''Представление избранных работ'''
    queryset = FavoriteArtworkModel.objects.all()
    serializer_class = FavoriteArtworkSerializer
    permission_classes = (IsAuthenticated,)

    def delete(self, request, *args, **kwargs):
        destroy = FavoriteArtworkModel.objects.filter(
            user_id=request.user.id,
            artwork_id=request.data['artwork']
        )
        if destroy:
            destroy.delete()
            return Response(
                {'Ошибка': 'В избранном нет такого произведения'},
                status=status.HTTP_204_NO_CONTENT
            )
        return Response(
            {'Ошибка': 'В избранном нет такого произведения'},
            status=status.HTTP_400_BAD_REQUEST
        )

    def get_list(self, request, *args, **kwargs):
        result = FavoriteArtworkModel.objects.filter(
            user_id=self.request.user
        ).select_related('artwork')
        serializer = self.serializer_class(result, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        try:
            result, create = FavoriteArtworkModel.objects.get_or_create(
                user_id=request.user.id,
                artwork_id=request.data['artwork']
            )
        except KeyError as er:
            return Response({'Ошибка': f' Нет поля {er}'})
        if create:
            request.data['user'] = request.user.id
            return Response(request.data, status=status.HTTP_201_CREATED)
        return Response({'Ошибка': 'вы уже добавили в избранное'})


@extend_schema_view(**NEWS_API_SCHEMA_EXTENSIONS)
class NewsViewSet(generics.ListAPIView):
    """Представление для отображение активных новостей"""
    queryset = NewsModel.objects.filter(is_active=True).order_by('-date_pub')
    serializer_class = NewsSerializer


@extend_schema_view(**FAVORIRE_ARTIST_API_SCHEMA_EXTENSIONS)
class FavoriteArtistsViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    """Представление для любимых авторов"""
    queryset = FavoriteArtistModel.objects.all()
    serializer_class = FavoriteSerializer
    permission_classes = [IsAuthenticated, ]

    def get_queryset(self):
        if self.action == "edit_favorite":
            return ArtistModel.objects.all()
        return FavoriteArtistModel.objects.filter(user=self.request.user)

    @action(['post', 'delete'], detail=True)
    def edit_favorite(self, request, *args, **kwargs):
        user = request.user
        try:
            artist = self.get_object()
        except Exception:
            return Response(
                {'ERROR': ARTISTS['no_artist']},
                status=status.HTTP_400_BAD_REQUEST)
        user_artist = FavoriteArtistModel.objects.filter(
            user=user, artist=artist
        )
        if request.method == 'DELETE':
            if not user_artist.exists():
                return Response(
                    {'ERROR': ARTISTS['no_artist']},
                    status=status.HTTP_400_BAD_REQUEST
                )
            user_artist.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        if user_artist.exists():
            return Response(
                {'ERROR': ARTISTS['yes_artist']},
                status=status.HTTP_400_BAD_REQUEST
            )
        FavoriteArtistModel.objects.create(user=user, artist=artist)
        serializer = self.get_serializer(
            FavoriteArtistModel.objects.get(
                user=user,
                artist=artist
            )
        )
        return Response(
            serializer.data, status=status.HTTP_201_CREATED)
