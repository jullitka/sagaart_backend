from django.urls import include, path
from rest_framework import routers

from api.market_views import DeliveryViewSet, OrdersViewSet, ShoppingCartViewSet
from api.views import (FavoriteArt, FavoriteArtistsViewSet, NewsViewSet,
                       PaintingsAPIView, RetrieveArtObject, TestArtworkViewSet)


v1_router = routers.SimpleRouter()

v1_router.register(
    r'shopping_cart', ShoppingCartViewSet, basename='shopping_cart'
)
v1_router.register(r'orders', OrdersViewSet, basename='orders')
v1_router.register(r'delivery', DeliveryViewSet, basename='delivery')
v1_router.register(
    r'favorite_artists', FavoriteArtistsViewSet, basename='favorite_artists'
)

v2_router = routers.SimpleRouter()
v2_router.register(r'artworks', TestArtworkViewSet, basename='test_artwork')

urlpatterns = [
    path('v1/', include(v1_router.urls)),
    path(
        'v1/artworks/',
        PaintingsAPIView.as_view(),
        name='paintings'
    ),
    path('v1/news/', NewsViewSet.as_view(), name='news'),
    path('v1/artworks/<int:pk>', RetrieveArtObject.as_view()),
    path(
        'v1/artworks/favorite_arts/',
        FavoriteArt.as_view(
            {
                'get': 'get_list',
                'post': 'post',
                'delete': 'delete'
            }
        ),
        name='favorite_arts'
    ),
    path('v2/', include(v2_router.urls)),
]
