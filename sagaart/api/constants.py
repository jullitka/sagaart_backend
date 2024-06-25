from drf_spectacular.utils import extend_schema


ORDER_API_SCHEMA_EXTENSIONS = {
    'list': extend_schema(
        tags=['Заказы'],
        summary="Получить список заказов пользователя"),
    'retrieve': extend_schema(
        tags=['Заказы'],
        summary="Получить данные о заказе пользователя"),
    'create': extend_schema(
        tags=['Заказы'],
        summary="Создать заказ"),
}


SHOPPING_CART_API_SCHEMA_EXTENSIONS = {
    'list': extend_schema(
        tags=['Корзина'],
        summary="Получение содержимого корзины пользователем")
}

DELIVERY_API_SCHEMA_EXTENSIONS = {
    'list': extend_schema(
        tags=['Доставка'],
        summary="Получение списка доставок пользователя")
}
