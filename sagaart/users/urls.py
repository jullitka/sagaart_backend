from django.urls import path, include
from rest_framework import routers
from djoser.views import UserViewSet
from djoser.views import TokenCreateView, TokenDestroyView

from api.views import MainUserViewSet, SubscribeViewSet, TestViewSet

v1_router = routers.DefaultRouter()

v1_router.register(
    'users', MainUserViewSet, basename='users'
)
v1_router.register('subscriptions', SubscribeViewSet, basename='subscriptions')
v1_router.register('user_subs', TestViewSet, basename='user_subs')

urlpatterns = [
    path('v1/', include(v1_router.urls)),
    path('auth/token/login/', TokenCreateView.as_view()),
    path('auth/token/logout/', TokenDestroyView.as_view()),
    path('v1/<int:sub_id>/subscribe/', 
         MainUserViewSet.as_view({'post':'subscribe', 'delete': 'subscribe'}))
]