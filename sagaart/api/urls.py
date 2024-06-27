from django.urls import include, path
from rest_framework import routers

from api.views import FavoriteArt, PaintingsAPIView, RetrieveArtObject
from api.views import NewsViewSet

v1_router = routers.DefaultRouter()


urlpatterns = [
    path(
        'artworks/', PaintingsAPIView.as_view(), name='paintings'
    ),
    path('artworks/<int:pk>', RetrieveArtObject.as_view()),
    path('artworks/favorite/', FavoriteArt.as_view({'get': 'get_list'})),
    path('news/', NewsViewSet.as_view()),
    path('v1', include(v1_router.urls)),
]
