from django.conf import settings
from django.db.models import Avg, F
from django.db.models.functions import Round
from django_filters.rest_framework import DjangoFilterBackend
from drf_spectacular.utils import extend_schema_view
from rest_framework import filters, status
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet

from .constants import (ORDER_API_SCHEMA_EXTENSIONS, SHOPPING_CART_API_SCHEMA_EXTENSIONS)
from .market_serializers import OrderCreateSerializer, ShoppingCartSerializer
from artworks.models import ArtworkModel
from market.models import OrderModel, ShoppingCartModel


@extend_schema_view(**SHOPPING_CART_API_SCHEMA_EXTENSIONS)
class ShoppingCartViewSet(ReadOnlyModelViewSet):
    """Предоставляет доступ к произведениям искусства в корзине покупателя"""
    permission_classes = (IsAuthenticated,)
    serializer_class = ShoppingCartSerializer

    def get_queryset(self):
        user = self.request.user
        return ShoppingCartModel.objects.filter(buyer=user)

    def list(self, request):
        user = request.user
        shopping_cart_items = ShoppingCartModel.objects.filter(buyer=user)
        serializer = ShoppingCartSerializer(shopping_cart_items, many=True)
        return Response(serializer.data)


@extend_schema_view(**ORDER_API_SCHEMA_EXTENSIONS)
class OrdersViewSet(ModelViewSet):
    """Предоставляет доступ к оформдению и просмотру заказов"""
    queryset = OrderModel.objects.all()
    serializer_class = OrderCreateSerializer
    pagination_class = LimitOffsetPagination
    permission_classes = (IsAuthenticated,) # сделать досутпной только автору

    def perform_create(self, serializer):
        serializer.save(buyer=self.request.user)
