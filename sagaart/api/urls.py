from django.urls import include, path
from rest_framework import routers

from api.views import FavoriteArt, PaintingsAPIView, RetrieveArtObject
from .market_views import DeliveryViewSet, OrdersViewSet, ShoppingCartViewSet
from .views import PaintingsAPIView, RetrieveArtObject, FavoriteArtistsViewSet



v1_router = routers.SimpleRouter()

v1_router.register(
    r'shopping_cart', ShoppingCartViewSet, basename='shopping_cart'
)
v1_router.register(r'orders', OrdersViewSet, basename='orders')
v1_router.register(r'delivery', DeliveryViewSet, basename='delivery')
v1_router.register(r'favorite_artists', FavoriteArtistsViewSet, basename='favorite_artists')

urlpatterns = [
    path('v1/', include(v1_router.urls)),
    path(
        'v1/artworks/', PaintingsAPIView.as_view(), name='paintings'
    ),
    path('v1/artworks/<int:pk>', RetrieveArtObject.as_view()),
    path('v1/artworks/favorite/', FavoriteArt.as_view({'get': 'get_list'})),
]
