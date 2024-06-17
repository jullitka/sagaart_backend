from django.urls import path, include
from rest_framework import routers
#from . import views

v1_router = routers.DefaultRouter()

#v1_router.register(
#    'users', views.UsersViewSet, basename='users'
#)

urlpatterns = [
    path('v1/', include(v1_router.urls)),
]