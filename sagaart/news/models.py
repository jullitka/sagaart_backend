from django.db import models


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

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'

    def __str__(self) -> str:
        return f'{self.name}'
