from drf_spectacular.utils import extend_schema, extend_schema_view


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
        summary="Получение содержимого корзины пользователем"),
    'add_copy_to_cart': extend_schema(
        tags=['Корзина'],
        summary="Добавление принта произведения в корзину"),
    'add_original_to_cart': extend_schema(
        tags=['Корзина'],
        summary="Добавление оригинала работы в корзину"),
    'remove_copy_from_cart': extend_schema(
        tags=['Корзина'],
        summary="Удаление принта произведения из корзину"),
    'remove_original_from_cart': extend_schema(
        tags=['Корзина'],
        summary="Удаление оригинала произведения из корзину"),
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


FAVORITE_ARTVORK_API_SCHEMA_EXTENSIONS = {
    'get_list': extend_schema(
        tags=['Произведения искусства'],
        summary="Получение списка всех произведений искусств, находящихся на продаже")
}

ARTVORK_API_SCHEMA_EXTENSIONS = {
    'get': extend_schema(
        tags=['Произведения искусства'],
        summary="Получение информации о произведении искусства"),
    'delete': extend_schema(
        tags=['Произведения искусства'],
        summary="Удаление произведения искусства из базы"),
    'patch': extend_schema(
        tags=['Произведения искусства'],
        summary='Отправка произведения на оценку'
    )
}

ARTVORKS_API_SCHEMA_EXTENSIONS = {
    'post': extend_schema(
        tags=['Произведения искусства'],
        summary="Добавление произведения искусства"),
    'get': extend_schema(
        tags=['Произведения искусства'],
        summary="Получение списка произведений искусства, находящихся на продаже"),
}

FAVORIRE_ARTIST_API_SCHEMA_EXTENSIONS = {
    'add_favorite': extend_schema(
        tags=['Авторы'],
        summary="Добавление в избранное авторов и удаление"),
    'list': extend_schema(
        tags=['Авторы'],
        summary="Получение списка избранных авторов пользователя"),
}