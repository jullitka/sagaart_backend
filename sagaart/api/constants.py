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

USER_API_SCHEMA_EXTENSIONS = {
    'list': extend_schema(
        tags=['Пользователи'],
        summary="Получение списка всех зарегестрированных пользователей"),
    'retrieve': extend_schema(
        tags=['Пользователи'],
        summary="Получение информации о пользователе"),
    'create': extend_schema(
        tags=['Пользователи'],
        summary="Создание нового пользователя"),
    'destroy': extend_schema(
        tags=['Пользователи'],
        summary="Удаление пользователя"),
    'update': extend_schema(
        tags=['Пользователи'],
        summary="Изменение данных пользователя"),
    'me': extend_schema(
        tags=['Пользователи'],
        summary="Получение, изменение и удаление данных о себе пользователем"),
    'set_password': extend_schema(
        tags=['Пользователи'],
        summary="Установка нового пароля пользователем"),
    'my_subscription': extend_schema(
        tags=['Подписка'],
        summary='Получение информации о своей подписке пользователем')
}

SUBSCRIPTION_API_SCHEMA_EXTENSIONS = {
    'list': extend_schema(
        tags=['Подписка'],
        summary="Получение списка всех вариантов подписок"),
    'retrieve': extend_schema(
        tags=['Подписка'],
        summary="Получение информации о выбранной подписке"),
    'subscribe': extend_schema(
        tags=['Подписка'],
        summary='Оформление и удаление подписки'),
}