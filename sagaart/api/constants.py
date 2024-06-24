from drf_spectacular.utils import extend_schema


ORDER_API_SCHEMA_EXTENSIONS = {
    'list': extend_schema(
        tags=['Корзина, оформление заказа, покупки, доставка'],
        summary="Получить список своих заказов"),
    'retrieve': extend_schema(
        tags=['Корзина, оформление заказа, покупки, доставка'],
        summary="Получить данные о своем заказе"),
    'create': extend_schema(
        tags=['Корзина, оформление заказа, покупки, доставка'],
        summary="Создать заказ"),
}


SHOPPING_CART_API_SCHEMA_EXTENSIONS = {
    'list': extend_schema(
        tags=['Корзина, оформление заказа, покупки, доставка'],
        summary="Получение содержимого корзины пользователем")
}
