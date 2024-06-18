from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model

from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from djoser.views import UserViewSet
import datetime as dt

from api.serializers import (
    SubscribeSerializer,
    SubscribeUserSerializer,
)
from api.permissions import IsAdminOrRead
from api.messages import SUBSCRIPTIONS

from users.models import Subscribe, UserSubscribe

from djoser.conf import settings

SAFE_METHODS = ["GET", "HEAD", "OPTIONS"]
PERMISSIONS_USER = ["me", "subscribe"]
User = get_user_model()


class SubscribeViewSet(viewsets.ModelViewSet):
    queryset = Subscribe.objects.all()
    serializer_class = SubscribeSerializer
    permission_classes = [
        IsAdminOrRead,
    ]


class MainUserViewSet(UserViewSet):
    def get_permissions(self):
        if self.action in PERMISSIONS_USER:
            self.permission_classes = settings.PERMISSIONS.me
        return super().get_permissions()

    def get_serializer_class(self, *args, **kwargs):
        if self.action == "subscribe" or self.action == "my_subscription":
            return SubscribeUserSerializer
        return super().get_serializer_class(*args, **kwargs)

    @action(["post", "delete"], detail=True)
    def subscribe(self, request, sub_id, *args, **kwargs):
        user = request.user
        subscription = get_object_or_404(Subscribe, pk=sub_id)
        if request.method == "POST":
            if UserSubscribe.objects.filter(user_id=user).exists():
                return Response(
                    {"ERROR": SUBSCRIPTIONS["exists"]},
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
