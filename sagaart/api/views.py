from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model

from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from djoser.views import UserViewSet

from api.serializers import ArtWorkSerializer, SubscribeSerializer, SubscribeUserSerializer
from api.permissions import IsOwnerProfileOrReadOnly, IsOwnerProfile, IsAdminOrRead
from api.messages import SUBSCRIPTIONS

from users.models import Subscribe, UserSubscribe

from djoser.conf import settings

SAFE_METHODS = ['GET', 'HEAD', 'OPTIONS']
PERMISSIONS_USER = ['me',]
User = get_user_model()


class ArtWorkViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = ArtWorkSerializer


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
            
