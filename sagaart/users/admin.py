from typing import Any
from django.contrib import admin
from django.contrib.auth import get_user_model
from django import forms
from django.utils.translation import gettext_lazy as _

from users.models import Subscribe, UserSubscribe

from users import models

User = get_user_model()


class MainUserCreationForm(forms.ModelForm):
    password = forms.CharField(
        label=_("Password"),
        strip=False,
        widget=forms.PasswordInput(attrs={'autocomplete':'new_password'}),
        help_text=_('Введите пароль')
    )

    class Meta:
        model = User
        fields = (
            'name',
            'surname',
            'email',
            'phone_number',
            'status',
            'subscription',
            'approval',
            'is_staff'
        )

    def save(self, commit: bool = True) -> Any:
        user = super().save(commit=False)
        user.set_password(self.cleaned_data['password'])
        if commit:
            user.save()
            if hasattr(self, "save_m2m"):
                self.save_m2m()
        return user


@admin.register(User)
class MainUserAdmin(admin.ModelAdmin):
    form = MainUserCreationForm
    list_display = (
        'id',
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
