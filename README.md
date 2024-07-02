# Sagaart

Сервис оценки арт-объектов современного искусства на основе анализа больших данных с помощью авторского алгоритма.

Проект доступен по адресу [http://158.160.134.225/](http://158.160.134.225/)

![example workflow](https://github.com/jullitka/sagaart_backend/actions/workflows/deploy_workflow.yml/badge.svg)


## Стек технологий

[![Python](https://img.shields.io/badge/-Python-464646?style=flat-square&logo=Python)](https://www.python.org/)
[![Django](https://img.shields.io/badge/-Django-464646?style=flat-square&logo=Django)](https://www.djangoproject.com/)
[![Django REST Framework](https://img.shields.io/badge/-Django%20REST%20Framework-464646?style=flat-square&logo=Django%20REST%20Framework)](https://www.django-rest-framework.org/)
[![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-464646?style=flat-square&logo=PostgreSQL)](https://www.postgresql.org/)
[![docker](https://img.shields.io/badge/-Docker-464646?style=flat-square&logo=docker)](https://www.docker.com/)
[![Yandex.Cloud](https://img.shields.io/badge/-Yandex.Cloud-464646?style=flat-square&logo=Yandex.Cloud)](https://cloud.yandex.ru/)
[![Nginx](https://img.shields.io/badge/-NGINX-464646?style=flat-square&logo=NGINX)](https://nginx.org/ru/)
[![gunicorn](https://img.shields.io/badge/-gunicorn-464646?style=flat-square&logo=gunicorn)](https://gunicorn.org/)
[![GitHub%20Actions](https://img.shields.io/badge/-GitHub%20Actions-464646?style=flat-square&logo=GitHub%20actions)](https://github.com/features/actions)



## Команда разработчиков:
- [Козлов Максим](https://github.com/mkmmcvrs68)
- [Паршин Денис](https://github.com/Fersawas)
- [Пашкова Юлия](https://github.com/Jullitka)

## Запуск проекта в контейнерах


#### Клонируйте репозиторий
```
git clone https://github.com/jullitka/sagaart_backend.git
```
#### Создайте файл содержащий переменные виртуального окружения .env на примере .env.example в директории infra
```
SECRET_KEY = '<Секретный ключ проекта Django>'
POSTGRES_ENGINE = django.db.backends.postgresql_psycopg2
POSTGRES_NAME = postgres
POSTGRES_USER = postgres
POSTGRES_PASSWORD = postgres
POSTGRES_HOST = localhost
POSTGRES_PORT = 5432
DEBUG = False
```
#### Разверните контейнеры из папки infra и выполните миграции
```
docker compose up -d --build
docker-compose exec backend python manage.py makemigrations
docker-compose exec backend python manage.py migrate
```
#### Создайте суперюзера
```
docker-compose exec backend python manage.py createsuperuser
```
####  Cоберите статику
```
docker-compose exec backend python manage.py collectstatic
```

## Запуск проекта на удаленном сервере с помощтю GitHub Actions

- #### Установить docker и docker-compose на удаленном сервере.
- #### Скопировать файлы docker-compose.yml и nginx.conf из директории infra/dev на удаленный сервер
```
scp docker-compose.yml <username>@<host>:/home/<username>/
scp nginx.conf <username>@<host>:/home/<username>/
```
- #### Добавить в Secrets репозитория проекта на github следующие переменные окружения:
```
SECRET_KEY = '<Секретный ключ проекта Django>'
POSTGRES_ENGINE = django.db.backends.postgresql_psycopg2
POSTGRES_NAME = postgres
POSTGRES_USER = postgres
POSTGRES_PASSWORD = postgres
POSTGRES_HOST = localhost
POSTGRES_PORT = 5432
DEBUG = False
ALLOWED_HOST = '*'
SSH_HOST = <данные для подключения к серверу>
SSH_KEY = <данные для подключения к серверу>
SSH_USER = <данные для подключения к серверу>
PASSPHRASE = <данные для подключения к серверу>
DOCKER_USERNAME = <данные для подключения к Dockerhub>
DOCKER_PASSWORD = <данные для подключения к Dockerhub>
```
- #### После выполнения команды git push запустится workflow:
- tests: проверка кода на соответствие PEP8.
- build_and_push_to_docker_hub: сборка и размещение образа проекта на DockerHub.
- deploy: автоматический деплой на сервер и запуск проекта.

В случае успешного выполнения предыдущего пункта на сервере необходимо выполнить следующие команды:

- #### Выполнить миграции:
```
sudo docker-compose exec backend python manage.py makemigrations
sudo docker-compose exec backend python manage.py migrate
```
- #### Собрать статику
```
sudo docker-compose exec backend python manage.py collectstatic
```
- #### Создать суперпользователя
```
sudo docker-compose exec backend python manage.py createsuperuser
```

## Документация

Swagger [http://158.160.134.225/schema](http://158.160.134.225/schema)

## API

В рамках проекта реализованы следующие эндпоинты

## Произведения искусства

- #### Получение списка произведений искусства, находящихся на продаже

GET /api/v1/artworks/

- #### Добавление произведения искусства
  
POST /api/v1/artworks/

- #### Получение информации о произведении искусства
  
GET /api/v1/artworks/{id}

- #### Удаление произведения искусства из базы

DELETE /api/v1/artworks/{id}

- #### Добавление произведения искусства в избранное
  
POST /api/v1/artworks/favorite_arts/

- #### Удаление произведения искусства из избранного
 
DELETE /api/v1/artworks/favorite_arts/

- #### Получение списка избранных произведений пользователя
  
GET /api/v1/artworks/favorite_arts/



## Доставка

- #### Получение списка всех доставок пользователя

GET /api/v1/delivery/

- #### Получение списка еще недоставленных произведений

GET /api/v1/delivery/is_not_delivered/


## История покупок

- #### Получение истории покупок (доставленных произведений)

GET /api/v1/delivery/is_delivered/


## Авторы

- #### Получение списка избранных авторов пользователя

GET /api/v1/favorite_artists/

- #### Добавление автора в избранное

POST /api/v1/favorite_artists/{id}/edit_favorite/

- #### Удаление автора из избранного

DELETE /api/v1/favorite_artists/{id}/edit_favorite/


## Новости

- #### Получение списка новостей

GET /api/v1/news/


## Заказы

- #### Получение списка заказов пользователя

GET /api/v1/orders/

- #### Создание заказ

POST /api/v1/orders/

- #### Получение данных о заказе пользователя

GET /api/v1/orders/{id}/


## Корзина

- #### Получение содержимого корзины пользователем

GET /api/v1/shopping_cart/

- #### Добавление принта произведения в корзину

POST /api/v1/shopping_cart/{id}/add_copy_to_cart/

- #### Добавление оригинала работы в корзину

POST /api/v1/shopping_cart/{id}/add_original_to_cart/

- #### Удаление принта произведения из корзину

DELETE /api/v1/shopping_cart/{id}/remove_copy_from_cart/

- #### Удаление оригинала произведения из корзину

DELETE /api/v1/shopping_cart/{id}/remove_original_from_cart/


## Подписка


- #### Получение списка всех вариантов подписок

GET /users/v1/subscriptions/

- #### Получение информации о выбранной подписке

GET /users/v1/subscriptions/{id}/

- #### Оформление подписки

POST /users/v1/subscriptions/{id}/subscribe/

- #### Удаление подписки

DELETE /users/v1/subscriptions/{id}/subscribe/

- #### Получение информации о своей подписке пользователем

GET /users/v1/users/my_subscription/


## Пользователи


- #### Получение списка всех зарегестрированных пользователей

GET /users/v1/users/

- #### Создание нового пользователя

POST /users/v1/users/

- #### Получение информации о пользователе

GET /users/v1/users/{id}/

- #### Изменение данных пользователя

PUT /users/v1/users/{id}/

- #### Удаление пользователя

DELETE /users/v1/users/{id}/

- #### Получениеданных о себе пользователем

GET /users/v1/users/me/

- #### Изменение данных о себе пользователем

PUT /users/v1/users/me/

- #### Изменение данных о себе пользователем

PATCH /users/v1/users/me/

- #### Удаление данных о себе пользователем

DELETE /users/v1/users/me/

- #### Установка нового пароля пользователем

POST /users/v1/users/set_password/

- #### Получение токена для авторизации

POST /users/auth/token/login/

