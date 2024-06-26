from drf_spectacular.utils import extend_schema


ORDER_API_SCHEMA_EXTENSIONS = {
    'list': extend_schema(
        tags=['Заказы'],
        summary="Получение списка заказов пользователя"),
    'retrieve': extend_schema(
        tags=['Заказы'],
        summary="Получение данных о заказе пользователя"),
    'create': extend_schema(
        tags=['Заказы'],
        summary="Создание заказ"),
}


SHOPPING_CART_API_SCHEMA_EXTENSIONS = {
    'list': extend_schema(
        tags=['Корзина'],
        summary="Получение содержимого корзины пользователем")
}

DELIVERY_API_SCHEMA_EXTENSIONS = {
    'list': extend_schema(
        tags=['Доставка'],
        summary="Получение списка всех доставок пользователя"),
    'is_delivered': extend_schema(
        tags=['История покупок'],
        summary="Получение истории покупок (доставленных произведений)"),
    'is_not_delivered': extend_schema(
        tags=['Доставка'],
        summary='Получение списка еще недоставленных произведений')

}
