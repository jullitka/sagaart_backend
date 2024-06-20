from django.urls import include, path
from rest_framework import routers

from api.views import PaintingsAPIView, RetrieveArtObject

v1_router = routers.DefaultRouter()


urlpatterns = [
    path(
        'paintings', PaintingsAPIView.as_view(), name='paintings'
    ),
    path('paintings/<int:pk>', RetrieveArtObject.as_view()),
    # path('paintings/<int:pk>/'),
    path('v1', include(v1_router.urls)),
]
