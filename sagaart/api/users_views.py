import datetime as dt

from django.contrib.auth import get_user_model
from djoser.conf import settings
from djoser.views import UserViewSet
from drf_spectacular.utils import extend_schema_view
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.constants import (PERMISSIONS_USER,
                           SUBSCRIPTION_API_SCHEMA_EXTENSIONS,
                           USER_API_SCHEMA_EXTENSIONS)
from api.messages import SUBSCRIPTIONS
from api.permissions import IsAdminOrRead
from api.users_serializers import (SubscribeSerializer,
                                   SubscribeUserSerializer)
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
