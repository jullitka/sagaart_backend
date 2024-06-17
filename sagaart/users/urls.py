from django.urls import path
from rest_framework import routers
from . import views

v1_router = routers.SimpleRouter()

v1_router.register(
    'users', views.UsersViewSet, basename='users'
)