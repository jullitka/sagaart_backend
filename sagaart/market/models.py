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
    is_copy = models.BooleanField(
        verbose_name='Принт картины',
        default=False,
        null=False,
        blank=False
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
    comment = models.TextField(
        verbose_name='Комментарий к заказу',
        null=True,
        blank=True,
        max_length=500
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

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказ'

    def __str__(self):
        return f'Заказ №{self.id} {self.buyer}'


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
    in_delivery = models.BooleanField(
        verbose_name='Передано в доставку',
        default=False
    )
    is_delivered = models.BooleanField(
        verbose_name='Доставлено',
        default=False
    )
    delivery_date = models.DateTimeField(
        verbose_name='Ожидаемая дата доставки',
        db_index=True,
        null=True,
        blank=True
    )

    class Meta:
        verbose_name = 'Покупка'
        verbose_name_plural = 'Покупки'
        constraints = [
            models.UniqueConstraint(fields=['artwork'], name='unique_artwork')
        ]

    def __str__(self):
        return f'{self.artwork} из заказа {self.order}'


class NewsModel(models.Model):
    name = models.CharField(
        max_length=100, 
        null=False, 
        blank=False, 
        unique=True
    )
    text = models.TextField()
    is_active = models.BooleanField()
    date_pub = models.DateTimeField(auto_now_add=True,)

    def __str__(self) -> str:
        return f'Новость с название {self.name}. {"Активно" if self.is_active else "Неактивно"}'
