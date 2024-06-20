from datetime import datetime, timedelta

import jwt
from django.contrib.auth.models import AbstractBaseUser
from django.db import models

from users.manager import CustomUserManager


class PermUser:

    def has_perm(self, perm, obj=None):
        return self.is_staff

    def has_module_perms(self, app_label):
       return self.is_staff


class Subscribe(models.Model):
    price = models.IntegerField('Cтоимость подписки')
    sub_time = models.IntegerField('Срок подписки') # | models.DurationField()

    def __str__(self):
        return (f'Длительность {self.sub_time} Стоимость {self.price}')

    class Meta:
        verbose_name = 'Подписка'
        verbose_name_plural = 'Подписки'
        ordering = ['-sub_time']


class UserSubscribe(models.Model):
    user_id = models.ForeignKey(
        'User',
        on_delete=models.CASCADE,
        related_name='user_sub'
    )
    subscribe = models.ForeignKey(
        Subscribe,
        on_delete=models.CASCADE,
        related_name='user_sub'
    )
    time_off = models.DateField(
        blank=True,
    )

    class Meta:
        verbose_name = 'Подписка пользователя'
        verbose_name_plural = 'Подписки пользователей'


class User(AbstractBaseUser, PermUser):

    class UserStatus(models.TextChoices):
        USER = 'Покупатель'
        ADMIN = 'Администратор'
        MODER = 'Модератор'
        SALER_COLLECT = 'Продавец коллекционер'
        SALER_ARTIST = 'Продавец художник'

    name = models.CharField(
        'Имя',
        max_length=20,
        null=False,
        blank=False
    )
    surname = models.CharField(
        'Фамилия',
        max_length=20,
        null=False,
        blank=False
    )
    email = models.EmailField(
        'Адрес почты',
        unique=True,
        null=False,
        blank=False
    )
    phone_number = models.CharField(
        'Номер телефона',
        max_length=20,
        unique=True,
        null=False,
        blank=False
    )
    status = models.CharField(
        'Статус пользователя',
        choices=UserStatus.choices,
        default=UserStatus.USER
    )
    subscription = models.ForeignKey(
        UserSubscribe,
        on_delete=models.CASCADE,
        default=None,
        blank=True,
        null=True
    )
    approval = models.BooleanField(
        'Согласие на обработку ПД',
        default=False
    )
    is_staff = models.BooleanField(
        default=False
    )

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['name', 'surname', 'phone_number']

    def __str__(self):
        return f'mail={self.email}, name={self.name}, status={self.status}'

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
