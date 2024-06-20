from django.contrib.auth import get_user_model
from rest_framework.permissions import SAFE_METHODS, BasePermission

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
    ''' Проверка является лиюзер админом'''
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
