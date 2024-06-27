from django_filters.rest_framework import DjangoFilterBackend
from django.shortcuts import get_object_or_404
from drf_spectacular.utils import extend_schema_view
from rest_framework import filters, mixins, viewsets, status
from rest_framework.decorators import action
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet

from .constants import (DELIVERY_API_SCHEMA_EXTENSIONS,
                        ORDER_API_SCHEMA_EXTENSIONS,
                        SHOPPING_CART_API_SCHEMA_EXTENSIONS)
from .market_serializers import (DeliverySerializer, OrderCreateSerializer,
                                 ShoppingCartSerializer)
from artworks.models import ArtworkModel
from market.models import OrderModel, PurchaseModel, ShoppingCartModel


@extend_schema_view(**SHOPPING_CART_API_SCHEMA_EXTENSIONS)
class ShoppingCartViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
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
    
    @action(detail=True, methods=['post'],)
    def add_original_to_cart(self, request, pk=None):
        user = request.user
        artwork = get_object_or_404(ArtworkModel, pk=pk)
        if ShoppingCartModel.objects.filter(
            buyer=user, artwork=artwork, is_copy=False
        ).exists():
            return Response({'Это произведение уже добавлено в корзину'},
                            status=status.HTTP_400_BAD_REQUEST)
        ShoppingCartModel.objects.create(buyer=user, artwork=artwork)
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=True, methods=['post'],)
    def add_copy_to_cart(self, request, pk=None):
        user = request.user
        artwork = get_object_or_404(ArtworkModel, pk=pk)
        ShoppingCartModel.objects.create(
            buyer=user, artwork=artwork, is_copy=True
        )
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=True, methods=['delete'])
    def remove_original_from_cart(self, request, pk=None):
        artwork = get_object_or_404(ArtworkModel, pk=pk)
        artwork_in_cart = get_object_or_404(
            ShoppingCartModel, artwork=artwork, is_copy=False
        )
        artwork_in_cart.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    @action(detail=True, methods=['delete'])
    def remove_copy_from_cart(self, request, pk=None):
        artwork = get_object_or_404(ArtworkModel, pk=pk)
        artwork_in_cart = ShoppingCartModel.objects.filter(
            buyer=request.user, artwork=artwork, is_copy=True
        ).first()
        if artwork_in_cart:
            artwork_in_cart.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(
            {'Такого объекта нет в корзине'}, status=status.HTTP_404_NOT_FOUND
        )


@extend_schema_view(**ORDER_API_SCHEMA_EXTENSIONS)
class OrdersViewSet(mixins.CreateModelMixin,
                    mixins.RetrieveModelMixin,
                    mixins.ListModelMixin,
                    viewsets.GenericViewSet):
    """Предоставляет доступ к оформлению и просмотру заказов"""
    serializer_class = OrderCreateSerializer
    pagination_class = LimitOffsetPagination
    permission_classes = (IsAuthenticated,) # сделать досутпной только автору

    def get_queryset(self):
        user = self.request.user
        return OrderModel.objects.filter(buyer=user)

    def perform_create(self, serializer):
        serializer.save(buyer=self.request.user)

@extend_schema_view(**DELIVERY_API_SCHEMA_EXTENSIONS)
class DeliveryViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    """Предоставляет возможность просматривать статус доставки"""
    serializer_class = DeliverySerializer
    pagination_class = LimitOffsetPagination
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        return PurchaseModel.objects.filter(buyer=user)
    
    @action(detail=False,
            permission_classes=(IsAuthenticated,))
    def is_not_delivered(self, request):
        """Получить список недоставленных покупок"""
        user = self.request.user
        delivered_purchases = PurchaseModel.objects.filter(
            buyer=user, is_delivered=False
        )
        serializer = self.get_serializer(delivered_purchases, many=True)
        return Response(serializer.data)
    
    @action(detail=False,
            permission_classes=(IsAuthenticated,))
    def is_delivered(self, request):
        """Получить список доставленных покупок"""
        user = self.request.user
        delivered_purchases = PurchaseModel.objects.filter(
            buyer=user, is_delivered=True
        )
        serializer = self.get_serializer(delivered_purchases, many=True)
        return Response(serializer.data)
