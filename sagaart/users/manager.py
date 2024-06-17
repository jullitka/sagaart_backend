from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser


class CustomUserManager(BaseUserManager):

    def create_superuser(self, email, name, surname, phone_number, password):
        user = self.create_user(email, name, surname, phone_number, password)
        user.is_staff = True
        user.save(using=self._db)
        return user
    
    def create_user(self, email, name, surname, phone_number, password):
        if not email:
            raise ValueError('Email must be set!')
        user = self.model(email=email, name=name, surname=surname, phone_number=phone_number)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def get_by_natural_key(self, email_):
        return self.get(email=email_)
    
    