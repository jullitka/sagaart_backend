from django.contrib.auth import get_user_model
from rest_framework.permissions import BasePermission, SAFE_METHODS

User = get_user_model()


class IsOwnerProfileOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.email == request.user


class IsOwnerProfile(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.email == request.user


class IsAdminOrRead(BasePermission):
    """Проверка является ли юзер админом"""
    def has_permission(self, request, view):
        return (
            request.method in SAFE_METHODS
            or request.user == User.is_staff
        )

    def has_object_permission(self, request):
        return (
            request.method in SAFE_METHODS
            or request.user == User.is_staff
        )


class IsAuthenticatedOrAuthorOrReadOnly(BasePermission):
    """Доступ авторизованному пользователю или только чтение"""
    def has_permission(self, request, view):
        return (
            request.method in SAFE_METHODS
            or request.user.is_authenticated
        )

    def has_object_permission(self, request, view, obj):
        return (
            request.method in SAFE_METHODS
            or obj.author == request.user
        )
