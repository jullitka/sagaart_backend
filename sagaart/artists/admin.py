from django.contrib import admin

from .models import (ArtistModel, EducationAuthorModel, EducationModel,
                     ExhibitionModel, ExhibitionParticipantModel,
                     FavoriteArtistModel, SeriesModel)


@admin.register(ArtistModel)
class ArtistModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']


@admin.register(EducationModel)
class EducationModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']


@admin.register(EducationAuthorModel)
class EducationAuthorModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'artist', 'education']


@admin.register(ExhibitionModel)
class ExhibitionModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'period']


@admin.register(ExhibitionParticipantModel)
class ExhibitionParticipantModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'participant', 'exhibition']


@admin.register(SeriesModel)
class SeriesModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'author']


@admin.register(FavoriteArtistModel)
class FavoriteArtistModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'artist', 'user']
