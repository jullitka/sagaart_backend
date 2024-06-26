from django.contrib import admin

from .models import (ArtworkModel, ArtworkPriceModel, CategoryModel,
                     FavoriteArtworkModel, StyleModel)


@admin.register(ArtworkModel)
class ArtworkModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'author', 'size', 'series',
                    'is_estimate', 'is_on_sold', 'style', 'category']


@admin.register(ArtworkPriceModel)
class ArtworkPriceModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'artwork', 'original_price',
                    'copy_price', 'pub_date']


@admin.register(FavoriteArtworkModel)
class FavoriteArtworkModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'artwork', 'user']


@admin.register(CategoryModel)
class CategoryModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']


@admin.register(StyleModel)
class StyleModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
