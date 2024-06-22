from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend
from djoser.conf import settings
from djoser.views import UserViewSet
from rest_framework import filters, generics, status, viewsets
from rest_framework.decorators import action
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.messages import SUBSCRIPTIONS
from api.permissions import IsAdminOrRead, IsOwnerProfile
from api.serializers import (ArtListSerializer, ArtObjectSerializer,
                             SubscribeSerializer, SubscribeUserSerializer)
from api.utils import get_object_by_filter
from artists.models import SeriesModel
from artworks.models import (ArtistModel, ArtworkModel, ArtworkPriceModel,
                             StyleModel)
from users.models import Subscribe, UserSubscribe
import datetime as dt


SAFE_METHODS = ['GET', 'HEAD', 'OPTIONS']
PERMISSIONS_USER = ['me',]
User = get_user_model()


class SubscribeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Subscribe.objects.all()
    serializer_class = SubscribeSerializer
    permission_classes = [IsAdminOrRead, ]


class TestViewSet(viewsets.ModelViewSet):
    queryset = UserSubscribe.objects.all()
    serializer_class = SubscribeUserSerializer


class MainUserViewSet(UserViewSet):
    '''Представление функционала пользователя'''
    def get_permissions(self):
        if self.action in PERMISSIONS_USER:
            self.permission_classes = settings.PERMISSIONS.me
        return super().get_permissions()

    def get_serializer_class(self, *args, **kwargs):
        if self.action == "subscribe" or self.action == "my_subscription":
            return SubscribeUserSerializer
        return super().get_serializer_class(*args, **kwargs)

    @action(['post', 'delete'], detail=True)
    def subscribe(self, request, sub_id, *args, **kwargs):
        user = request.user
        subscription = get_object_or_404(
            Subscribe,
            pk=sub_id
        )
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
        

    @action(["get"], detail=True, permission_classes=[IsAuthenticated])
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


class PaintingsAPIView(generics.ListCreateAPIView):
    '''Представление для списка и создания арт-объекта'''
    queryset = ArtworkModel.objects.all()
    serializer_class = ArtListSerializer
    pagination_class = LimitOffsetPagination
    permission_classes = (IsAuthenticated,)
    filter_backends = (DjangoFilterBackend, filters.SearchFilter,)
    filterset_fields = (
        'brushstrokes_material', 'size', 'decoration',
        'orientation', 'style', 'author')  # price
    search_fields = ('name',)

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
            price = ArtworkPriceModel.objects.filter(artwork=art)
            art.price = price
        except Exception as er:
            return Response({'Ошибка': f' Нет поля {er}'})
        return Response(
            data=(request.data, price,),
            status=status.HTTP_201_CREATED
        )


class RetrieveArtObject(generics.RetrieveAPIView):
    '''Представление для карточки арт-объекта'''
    queryset = ArtworkModel.objects.all()
    serializer_class = ArtObjectSerializer
    permission_classes = (IsAuthenticated,)
