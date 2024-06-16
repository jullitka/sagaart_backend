from django.db import models

from constants import ORIENTATION_CHOICES, SALE_STATUS_CHOICES


class EducationModel(models.Model):
    """Модель образовательного учрежления"""
    name = models.CharField(
        verbose_name='Название образовательного учреждения',
        null=False,
        blank=False,
        max_length=200
    )

    class Meta:
        verbose_name = 'Образовательное учреждение'
        verbose_name_plural = 'Образовательные учреждения'

    def __str__(self):
        return f'{self.name}'


class ArtistModel(models.Model):
    """Модель автора произведений"""
    name = models.CharField(
        verbose_name='Имя и фамилия',
        null=False,
        blank=False,
        max_length=200
    )
    education = models.ForeignKey(
        EducationModel,
        verbose_name='Образование автора',
    )
    about_artist = models.CharField(
        verbose_name='Об авторе',
        null=False,
        blank=False,
        max_length=200
    )
    photo = models.ImageField(
        verbose_name='Фото автора'
    )

    class Meta:
        verbose_name = 'Автор'
        verbose_name_plural = 'Авторы'

    def __str__(self):
        return f'{self.name}'


class EducationAuthorModel(models.Model):
    """Модель связи образотвальельных учреждени и атворов"""
    artist = models.ForeignKey(
        ArtistModel,
        verbose_name='Имя и фамилия автора'
    )
    education = models.ForeignKey(
        EducationModel,
        verbose_name='Название учебного заведения'
    )
    education_start = models.IntegerField(
        verbose_name='Год начала обучения',
        blank=True,
        null=True
    )
    education_finish = models.IntegerField(
        verbose_name='Год окончания обучения',
        blank=True,
        null=True
    )

    def __str__(self):
        return f'{self.artist} учился в {self.education}'


class SeriesModel(models.Model):
    """Модель серии работ"""
    name = models.CharField(
        verbose_name='Название серии',
        null=False,
        blank=False,
        max_length=200
    )
    author = models.ForeignKey(
        ArtistModel,
        verbose_name='Автор серии'
    )

    class Meta:
        verbose_name = 'Серия работ'
        verbose_name_plural = 'Серии работ'

    def __str__(self):
        return f'{self.name}'


class ExhibitionModel(models.Model):
    """Модель выставки"""
    name = models.CharField(
        verbose_name='Название выставки',
        null=False,
        blank=False,
        max_length=200
    )
    period = models.CharField(
        verbose_name='Период проведения выставки',
        null=False,
        blank=False,
        max_length=50
    )
    address = models.CharField(
        verbose_name='Место проведения выставки',
        null=False,
        blank=False,
        max_length=200
    ) 

    class Meta:
        verbose_name = 'Выставка'
        verbose_name_plural = 'Выставки'

    def __str__(self):
        return f'{self.name}'


class ExhibitionParticipantModel(models.Model):
    """Модель связи выставок с их участниками"""
    exhibition = models.ForeignKey(
        ExhibitionModel,
        verbose_name='Выставка'
    )
    participant = models.ForeignKey(
        ArtistModel,
        verbose_name = 'Участник выставки'
    )

    def __str__(self):
        return f'{self.participant} участвовал в {self.exhibition}'


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
    series = models.ForeignKey(
        SeriesModel,
        verbose_name='Серия работ'
    )
    is_estimate = models.BooleanField(
        verbose_name='Оценка получена',
        default=False
    )
    is_on_sold = models.CharField(
        verbose_name='Статус продажи',
        choices_name=SALE_STATUS_CHOICES,
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