from django.contrib import admin
from django.urls import include, path, re_path
from drf_spectacular.views import (SpectacularAPIView, SpectacularRedocView,
                                   SpectacularSwaggerView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('schema', SpectacularSwaggerView.as_view(
        url_name='schema'), name='swagger-ui'),
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/schema/redoc/', SpectacularRedocView.as_view(
        url_name='schema'), name='redoc'),
    # path('users/', include('users.urls')),
    path('api/', include('api.urls')),
]
