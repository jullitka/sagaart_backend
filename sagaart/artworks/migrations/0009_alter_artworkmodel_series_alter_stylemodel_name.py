# Generated by Django 5.0.6 on 2024-06-27 15:48

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('artists', '0008_alter_artistmodel_about_artist_and_more'),
        ('artworks', '0008_artworkmodel_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artworkmodel',
            name='series',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='artists.seriesmodel', verbose_name='Серия работ'),
        ),
        migrations.AlterField(
            model_name='stylemodel',
            name='name',
            field=models.CharField(max_length=100, verbose_name='Стиль'),
        ),
    ]
