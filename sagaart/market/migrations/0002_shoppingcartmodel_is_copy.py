# Generated by Django 5.0.6 on 2024-06-24 10:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('market', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='shoppingcartmodel',
            name='is_copy',
            field=models.BooleanField(default=False, verbose_name='Принт картины'),
        ),
    ]
