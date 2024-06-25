from drf_spectacular.utils import extend_schema


USER_API_SCHEMA_EXTENSIONS = {
    'my_subscription': extend_schema(
        tags=['Подписка пользователя'],
        summary="Просмотр своей подписки пользователем"),
    'subscribe': extend_schema(
        tags=['Подписка пользователя'],
        summary="Оформление и отмена подписки"),
    'create': extend_schema(
        tags=['Подписка пользователя'],
        summary=""),
    'destroy': extend_schema(
        tags=['Подписка пользователя'],
        summary=""),
}

SUBSCRIBE_API_SCHEMA_EXTENSIONS = {
    'list': extend_schema(
        tags=['Подписка'],
        summary="Получение списка вариантов подписки"),
    'retrieve': extend_schema(
        tags=['Подписка'],
        summary="Получение информации о выбранной подписке"),
}