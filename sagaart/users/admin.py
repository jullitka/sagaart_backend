from django.contrib import admin
from django.contrib.auth import get_user_model
from users.models import Subscribe, UserSubscribe

from users import models

User = get_user_model()


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'surname',
        'email',
        'phone_number',
        'status',
        'subscription',
        'is_staff'
    )
    list_filter = ('status', )


@admin.register(Subscribe)
class SubscribeAdmin(admin.ModelAdmin):
    list_display = (
        'price',
        'sub_time'
    )


@admin.register(UserSubscribe)
class UserSubscribeAdmin(admin.ModelAdmin):
    list_display = (
        'email',
        'price',
        'sub_time',
        'time_off'
        )

    def email(self, obj):
        return obj.user_id.email

    def price(self, obj):
        return obj.subscribe.price

    def sub_time(self, obj):
        return obj.subscribe.sub_time

    email.short_description = 'Почта'
    price.short_description = 'Цена'
    sub_time.short_description = 'Длительность Подписки'
