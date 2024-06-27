from django.urls import include, path
from djoser.views import TokenCreateView, TokenDestroyView
from rest_framework import routers

from api.views import MainUserViewSet, SubscribeViewSet

v1_router = routers.DefaultRouter()

v1_router.register('users', MainUserViewSet, basename='users')
v1_router.register('subscriptions', SubscribeViewSet, basename='subscriptions')

urlpatterns = [
    path('v1/', include(v1_router.urls)),
    path('auth/token/login/', TokenCreateView.as_view()),
    path('auth/token/logout/', TokenDestroyView.as_view()),
    path(
        'v1/<int:sub_id>/subscribe/',
        MainUserViewSet.as_view(
            {'post': 'subscribe', 'delete': 'subscribe'}
        )
    ),
    path('v1/my/subscription/',
         MainUserViewSet.as_view({'get': 'my_subscription'}))
]
