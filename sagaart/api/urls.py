from django.urls import include, path
from rest_framework import routers

from api.views import FavoriteArt, PaintingsAPIView, RetrieveArtObject
from api.views import NewsViewSet
from .market_views import DeliveryViewSet, OrdersViewSet, ShoppingCartViewSet


v1_router = routers.SimpleRouter()

v1_router.register(
    r'shopping_cart', ShoppingCartViewSet, basename='shopping_cart'
)
v1_router.register(r'orders', OrdersViewSet, basename='orders')
v1_router.register(r'delivery', DeliveryViewSet, basename='delivery')

urlpatterns = [
    path('', include(v1_router.urls)),
    path(
        'artworks/', PaintingsAPIView.as_view(), name='paintings'
    ),
    path('artworks/<int:pk>', RetrieveArtObject.as_view()),
    path('artworks/favorite/', FavoriteArt.as_view({'get': 'get_list'})),
    path('news/', NewsViewSet.as_view()),
    path('v1', include(v1_router.urls)),
]
