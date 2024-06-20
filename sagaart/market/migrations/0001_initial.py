# Generated by Django 5.0.6 on 2024-06-18 11:35

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('artworks', '0003_favoriteartwork_favoriteartwork_favorite_artwork'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='OrderModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=500, verbose_name='Адрес доставки')),
                ('delivery_type', models.CharField(choices=[('delivery', 'доставка'), ('pickup', 'самовывоз')], max_length=100, verbose_name='Тип доставки')),
                ('payment_method', models.CharField(choices=[('online', 'онлайн'), ('on_receiving', 'приполучении')], max_length=100, verbose_name='Способ оплаты')),
                ('cost', models.IntegerField(verbose_name='Стоимость заказа')),
                ('purchase_date', models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='Дата оформления заказа')),
                ('buyer', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL, verbose_name='Покупатель')),
            ],
        ),
        migrations.CreateModel(
            name='PurchaseModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_delivered', models.BooleanField(default=False, verbose_name='Доставлено')),
                ('delivery_date', models.DateTimeField(db_index=True, verbose_name='Ожидаемая дата доставки')),
                ('artwork', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='artworks.artworkmodel', verbose_name='Произведение искусства')),
                ('buyer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Покупатель')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='market.ordermodel', verbose_name='Заказ')),
            ],
            options={
                'verbose_name': 'Покупка',
                'verbose_name_plural': 'Покупки',
            },
        ),
        migrations.CreateModel(
            name='ShoppingCartModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('artwork', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='artworks.artworkmodel', verbose_name='Произведение искусства')),
                ('buyer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Покупатель')),
            ],
            options={
                'verbose_name': 'Корзина',
                'verbose_name_plural': 'Корзина',
            },
        ),
    ]
