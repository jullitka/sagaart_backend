from django.db import models

from .constants import DELIVERY_TYPE_CHOICES, PAYMENT_METHOD_CHOICES
from artworks.models import ArtworkModel
from users.models import User


class ShoppingCartModel(models.Model):
    """Модель корзины"""
    artwork = models.ForeignKey(
        ArtworkModel,
        verbose_name='Произведение искусства',
        on_delete=models.CASCADE
    )
    buyer = models.ForeignKey(
        User,
        verbose_name='Покупатель',
        on_delete=models.CASCADE
    )

    class Meta:
        verbose_name = 'Корзина'
        verbose_name_plural = 'Корзина'

    def __str__(self):
        return f'{self.artwork} в корзине {self.buyer}'


class OrderModel(models.Model):
    """Модель заказа"""
    buyer = models.ForeignKey(
        User,
        verbose_name='Покупатель',
        on_delete=models.SET_NULL,
        null=True
    )
    address = models.CharField(
        verbose_name='Адрес доставки',
        null=False,
        blank=False,
        max_length=500
    )
    delivery_type = models.CharField(
        verbose_name='Тип доставки',
        choices=DELIVERY_TYPE_CHOICES,
        null=False,
        blank=False,
        max_length=100
    )
    payment_method = models.CharField(
        verbose_name='Способ оплаты',
        choices=PAYMENT_METHOD_CHOICES,
        null=False,
        blank=False,
        max_length=100
    )

    cost = models.IntegerField(
        verbose_name='Стоимость заказа',
        null=False,
        blank=False
    )
    purchase_date = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Дата оформления заказа',
        db_index=True
    )


class PurchaseModel(models.Model):
    """Модель покупки"""
    artwork = models.ForeignKey(
        ArtworkModel,
        verbose_name='Произведение искусства',
        on_delete=models.CASCADE
    )
    buyer = models.ForeignKey(
        User,
        verbose_name='Покупатель',
        on_delete=models.CASCADE
    )
    order = models.ForeignKey(
        OrderModel,
        verbose_name='Заказ',
        on_delete=models.CASCADE
    )
    is_delivered = models.BooleanField(
        verbose_name='Доставлено',
        default=False
    )
    delivery_date = models.DateTimeField(
        verbose_name='Ожидаемая дата доставки',
        db_index=True
    )

    class Meta:
        verbose_name = 'Покупка'
        verbose_name_plural = 'Покупки'

    def __str__(self):
        return f'{self.buyer} купил {self.artwork}'
