# Generated by Django 5.0.6 on 2024-06-27 15:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('market', '0003_ordermodel_comment_purchasemodel_in_delivery'),
    ]

    operations = [
        migrations.CreateModel(
            name='NewsModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('text', models.TextField()),
                ('is_active', models.BooleanField()),
                ('date_pub', models.DateField(auto_now_add=True)),
            ],
        ),
    ]
