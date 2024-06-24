from django.contrib.auth import get_user_model
import django.contrib.auth.password_validation as validators
from django.core import exceptions
from django.db import transaction
from django.utils import timezone

from rest_framework import serializers

from .serializers import StyleSerializer
from artworks.constants import SALE_STATUS_CHOICES
from artworks.models import ArtistModel, ArtworkModel, ArtworkPriceModel
from market.constants import DELIVERY_TYPE_CHOICES, PAYMENT_METHOD_CHOICES
from market.models import OrderModel, PurchaseModel, ShoppingCartModel
from users.models import Subscribe, UserSubscribe


class ArtworkToShoppingCartAuthorSerializer(serializers.ModelSerializer):
    """Сериализатор для авторов работ, добавленных в корзину"""
    class Meta:
        model = ArtistModel
        fields = (
            'name',
        )


class ArtworkToShoppingCartSerializer(serializers.ModelSerializer):
    """Сериализатор для работ, добавленных в корзину"""
    author = ArtworkToShoppingCartAuthorSerializer()
    style = StyleSerializer()

    class Meta:
        model = ArtworkModel
        fields = (
            'name',
            'author',
            'year',
            'size',
            'brushstrokes_material',
            'style',
            'image',
        )


class ShoppingCartSerializer(serializers.ModelSerializer):
    """Сериализатор для получения списка работ в корзине"""
    artwork = ArtworkToShoppingCartSerializer()
    price = serializers.SerializerMethodField()

    class Meta:
        model = ShoppingCartModel
        fields = ('artwork', 'price')

    def get_price(self, obj):
        artwork = obj.artwork
        artwork_price = ArtworkPriceModel.objects.filter(artwork=artwork).first()
        if obj.is_copy:
            return artwork_price.copy_price
        return artwork_price.original_price


class OrderCreateSerializer(serializers.ModelSerializer):
    """Сериализатор для создания заказа"""
    address = serializers.CharField()
    payment_method = serializers.ChoiceField(choices=PAYMENT_METHOD_CHOICES)
    delivery_type = serializers.ChoiceField(choices=DELIVERY_TYPE_CHOICES)
    comment = serializers.CharField()

    class Meta:
        model = OrderModel
        fields = (
            'address',
            'payment_method',
            'delivery_type',
            'comment'
        )

    def create(self, validated_data):
        buyer = self.context['request'].user
        shopping_cart = ShoppingCartModel.objects.filter(buyer=buyer)
        total_cost = 0

        # создание заказа
        with transaction.atomic():
            order = OrderModel.objects.create( 
                buyer=buyer,
                address=validated_data['address'],
                payment_method=validated_data['payment_method'],
                purchase_date=timezone.now(),
                delivery_type=validated_data['delivery_type'],
                comment=validated_data['comment'],
                cost=total_cost
            )

            # перебор всех произведений из корзины
            for artwork_info in shopping_cart:
                is_copy = artwork_info.is_copy
                latest_price_to_artwork = ArtworkPriceModel.objects.filter(
                    artwork=artwork_info.artwork
                ).latest('pub_date')

                if is_copy:
                    total_cost += latest_price_to_artwork.copy_price
                else:
                    total_cost += latest_price_to_artwork.original_price

                artwork=artwork_info.artwork
                # создание покупки для произведения из заказа
                PurchaseModel.objects.create( 
                    artwork=artwork,
                    buyer=buyer,
                    order=order
                )

                artwork.is_on_sold = SALE_STATUS_CHOICES[2]
                artwork.save()
          
            # добавление общей стоимотси заказа
            order.cost = total_cost
            order.save()

            # удаление работ из корзины
            shopping_cart.delete()
        return order
