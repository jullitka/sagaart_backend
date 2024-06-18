from django.contrib import admin

from .models import ArtworkModel, ArtworkPriceModel, FavoriteArtworkModel


@admin.register(ArtworkModel)
class ArtworkModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'author']


@admin.register(ArtworkPriceModel)
class ArtworkPriceModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'artwork', 'original_price', 'copy_price', 'pub_date']


@admin.register(FavoriteArtworkModel)
class FavoriteArtworkModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'artwork', 'user']
