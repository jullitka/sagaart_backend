from django.contrib import admin

from .models import NewsModel


@admin.register(NewsModel)
class NewsModelAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'text', 'is_active', 'date_pub')
