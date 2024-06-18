from django.db import models


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
        on_delete=models.SET_NULL,
        null=True
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
        verbose_name='Имя и фамилия автора',
        on_delete=models.CASCADE
    )
    education = models.ForeignKey(
        EducationModel,
        verbose_name='Название учебного заведения',
        on_delete=models.CASCADE
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
        verbose_name='Автор серии',
        on_delete=models.CASCADE
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
        verbose_name='Выставка',
        on_delete=models.CASCADE
    )
    participant = models.ForeignKey(
        ArtistModel,
        verbose_name='Участник выставки',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f'{self.participant} участвовал в {self.exhibition}'
