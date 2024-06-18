from django.db import models

from .constants import ORIENTATION_CHOICES, SALE_STATUS_CHOICES

from artists.models import ArtistModel, SeriesModel
from users.models import User


class ArtworkModel(models.Model):
    """Модель произведения искусства."""
    name = models.CharField(
        verbose_name='Название работы',
        null=False,
        blank=False,
        max_length=200
    )
    author = models.ForeignKey(
        ArtistModel,
        verbose_name='Автор работы',
        on_delete=models.CASCADE
    )
    user = models.ForeignKey(
        User,
        verbose_name='Продавец',
        on_delete=models.CASCADE
    )
    year = models.IntegerField(
        verbose_name='Год создания',
        blank=True,
        null=True
    )
    size = models.CharField(
        verbose_name='Размер работы',
        null=False,
        blank=False,
        max_length=100
    )
    brushstrokes_material = models.CharField(
        verbose_name='Техника, материал',
        null=False,
        blank=False,
        max_length=200
    )
    series = models.ForeignKey(
        SeriesModel,
        verbose_name='Серия работ',
        on_delete=models.SET_NULL,
        null=True
    )
    is_estimate = models.BooleanField(
        verbose_name='Оценка получена',
        default=False
    )
    is_on_sold = models.CharField(
        verbose_name='Статус продажи',
        choices=SALE_STATUS_CHOICES,
        null=False,
        blank=False,
        default='не размещено'
    )
    # может быть пустым в случае, если произведение - не картина
    orientation = models.CharField(
        verbose_name='Ориентация работы',
        choices=ORIENTATION_CHOICES,
        null=True,
        blank=True,
        max_length=100
    )
    style = models.CharField(
        verbose_name='Стиль работы',
        null=True,
        blank=True,
        max_length=100
    )

    decoration = models.CharField(
        verbose_name='Оформление',
        null=False,
        blank=False,
        max_length=200
    )
    author_signature = models.CharField(
        verbose_name='Наличие авторской подписи',
        null=False,
        blank=False,
        max_length=200
    )
    image = models.ImageField(
        verbose_name='Фото работы'
    )

    class Meta:
        verbose_name = 'Произведение искусства'
        verbose_name_plural = 'Произведения искусства'

    def __str__(self):
        return f'{self.name}, {self.author}'


class ArtworkPriceModel(models.Model):
    """Модель цен на произведения искусства и их копии"""
    artwork = models.ForeignKey(
        ArtworkModel,
        verbose_name='Произведение искусства',
        on_delete=models.CASCADE
    )
    original_price = models.CharField(
        verbose_name='Цена оригинала',
        null=False,
        blank=False,
        max_length=200
    )
    # может быть пустым, если произведение - не картина
    copy_price = models.CharField(
        verbose_name='Цена постера',
        null=True,
        blank=True,
        max_length=200
    )
    pub_date = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Дата публикации цены',
        db_index=True
    )

    class Meta:
        verbose_name = 'Цена произведения искусства'
        verbose_name_plural = 'Цены произведений искусства'

    def __str__(self):
        return f'{self.artwork} на {self.pub_date}'


class FavoriteArtworkModel(models.Model):
    """Модель избранных произведений искусства"""
    artwork = models.ForeignKey(
        ArtworkModel,
        verbose_name='Произведение искусства',
        on_delete=models.CASCADE
    )
    user = models.ForeignKey(
        User,
        verbose_name='Ценитель искусства',
        on_delete=models.CASCADE
    )

    class Meta:
        verbose_name = 'Избранное произведение'
        verbose_name_plural = 'Избранные произведения'
        constraints = [
            models.UniqueConstraint(
                fields=('artwork', 'user'), name='favorite_artwork'
            )
        ]

    def __str__(self):
        return f'{self.artwork} в избранном {self.user}'
