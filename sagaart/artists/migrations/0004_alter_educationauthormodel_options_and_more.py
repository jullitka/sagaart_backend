# Generated by Django 5.0.6 on 2024-06-18 12:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('artists', '0003_rename_favoriteartist_favoriteartistmodel_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='educationauthormodel',
            options={'verbose_name': 'Образование художника', 'verbose_name_plural': 'Образование художников'},
        ),
        migrations.AlterModelOptions(
            name='exhibitionparticipantmodel',
            options={'verbose_name': 'Выставка художника', 'verbose_name_plural': 'Выставки художников'},
        ),
    ]
