from django.contrib import admin

from .models import (OrderModel, PurchaseModel, ShoppingCartModel)


@admin.register(OrderModel)
class OrderModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'buyer', 'cost',
                    'delivery_type', 'payment_method', 'purchase_date']


@admin.register(PurchaseModel)
class PurchaseModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'artwork', 'is_delivered', 'delivery_date']


@admin.register(ShoppingCartModel)
class ShoppingCartModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'artwork', 'buyer']
