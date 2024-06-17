from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model

from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from api.serializers import ArtWorkSerializer

User = get_user_model()


class ArtWorkViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = pass
    serializer_class = ArtWorkSerializer
