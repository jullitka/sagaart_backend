from django.urls import include, path
from rest_framework import routers

from .market_views import OrdersViewSet, ShoppingCartViewSet
from .views import PaintingsAPIView, RetrieveArtObject


v1_router = routers.SimpleRouter()

v1_router.register(r'shopping_cart', ShoppingCartViewSet, basename='shopping_cart')
v1_router.register(r'orders', OrdersViewSet, basename='orders')

urlpatterns = [
    path('', include(v1_router.urls)),
    path(
        'paintings', PaintingsAPIView.as_view(), name='paintings'
    ),
    path('paintings/<int:pk>', RetrieveArtObject.as_view()),
    # path('paintings/<int:pk>/'),
    # path('v1', include(v1_router.urls)),
]
