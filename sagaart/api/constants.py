from drf_spectacular.utils import extend_schema


USERS_API_SCHEMA_EXTENSIONS = {
    'list': extend_schema(
        tags=['Users'], summary="Получить список пользователей"),
    'update': extend_schema(
        tags=['Users'], summary="Изменения данных о пользователе"),
    'partial_update': extend_schema(
        tags=['Users'],
        summary="Частичное изменение данных о пользователе",
        description="Изменения данных о пользователе. Поля, "
                    "которые не заполнены будут оставлены без изменений."
    ),
    'create': extend_schema(
        tags=['Users'], summary="Создать нового пользователя"),
    'destroy': extend_schema(
        tags=['Users'], summary="Удалить пользователя"),
    'retrieve': extend_schema(
        tags=['Users'], summary="Получить данные о пользователе")
}