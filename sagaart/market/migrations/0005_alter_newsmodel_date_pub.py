# Generated by Django 5.0.6 on 2024-06-27 16:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('market', '0004_newsmodel'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newsmodel',
            name='date_pub',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
