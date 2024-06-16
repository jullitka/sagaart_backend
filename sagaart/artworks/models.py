from django.db import models

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
        n_delete=models.CASCADE
    )
    user = models.ForeignKey(
        UserModel,
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
    is_on_estimating = models.BooleanField(
        verbose_name='Находится на оценивании',
        default=False
    )
    is_on_sold = models.BooleanField(
        verbose_name='Находится на продаже',
        default=False
    )
    orientation = models.CharField(
        verbose_name='Ориентация работы',
        null=False,
        blank=False,
        max_length=100
    )
    style = models.ForeignKey(
        StyleModel,
        verbose_name='Стиль работы'
    )
    series = models.CharField(
        verbose_name='Серия',
        null=False,
        blank=False,
        max_length=200
    )
    decoration = models.CharField(
        verbose_name='Оформление',
        null=False,
        blank=False,
        max_length=200
    )
    author_signature = models.CharField(
        verbose_name='Оформление',
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


class ArtworkPrice(models.Model):
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
    copy_price = models.CharField(
        verbose_name='Цена оригинала',
        null=False,
        blank=False,
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