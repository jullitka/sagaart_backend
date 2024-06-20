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
from api.permissions import (IsAdminOrRead, IsOwnerProfile)
from api.serializers import (ArtListSerializer, ArtObjectSerializer,
                             SubscribeSerializer, SubscribeUserSerializer)
from artworks.models import ArtistModel, ArtworkModel, ArtworkPriceModel
from users.models import Subscribe, UserSubscribe

SAFE_METHODS = ['GET', 'HEAD', 'OPTIONS']
PERMISSIONS_USER = ['me',]
User = get_user_model()


class SubscribeViewSet(viewsets.ModelViewSet):
    queryset = Subscribe.objects.all()
    serializer_class = SubscribeSerializer
    permission_classes = [IsAdminOrRead, ]


class TestViewSet(viewsets.ModelViewSet):
    queryset = UserSubscribe.objects.all()
    serializer_class = SubscribeUserSerializer


class MainUserViewSet(UserViewSet):
    def get_permissions(self):
        if self.action == 'me':
            self.permission_classes = settings.PERMISSIONS.me
        if self.action == 'subscribe':
            self.permission_classes = IsOwnerProfile
        return super().get_permissions()

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
        author, create = ArtistModel.objects.get_or_create(
            name=request.data['artist']
        )
        data = request.data
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
            style=data['style'],
            decoration=data['decoration'],
            author_signature=data['author_signature'],
            series_id=data['series']
        )
        price = ArtworkPriceModel.objects.filter(artwork=art)
        art.price = price
        return Response(
            data=(request.data, price,),
            status=status.HTTP_201_CREATED
        )


class RetrieveArtObject(generics.RetrieveAPIView):
    '''Представление для карточки арт-объекта'''
    queryset = ArtworkModel.objects.all()
    serializer_class = ArtObjectSerializer
    permission_classes = (IsAuthenticated,)
