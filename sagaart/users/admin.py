from django.contrib import admin

from users import models

models = (models.User, models.Subscribe, models.UserSubscribe,)
admin.site.register(models)
