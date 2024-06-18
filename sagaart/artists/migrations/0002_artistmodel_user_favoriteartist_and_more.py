# Generated by Django 5.0.6 on 2024-06-18 11:35

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('artists', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='artistmodel',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь'),
        ),
        migrations.CreateModel(
            name='FavoriteArtist',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('artist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='artists.artistmodel', verbose_name='Автор')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Ценитель творчества автора')),
            ],
            options={
                'verbose_name': 'Любимый художник',
                'verbose_name_plural': 'Любимые художники',
            },
        ),
        migrations.AddConstraint(
            model_name='favoriteartist',
            constraint=models.UniqueConstraint(fields=('artist', 'user'), name='favorite_artist'),
        ),
    ]
