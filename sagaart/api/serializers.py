import django.db
from django.contrib.auth import get_user_model
import django.contrib.auth.password_validation as validators
from django.core import exceptions
from django.core.files.base import ContentFile

from rest_framework import serializers

import base64

from market.models import NewsModel
from artworks.models import (ArtistModel, ArtworkModel, FavoriteArtworkModel,
                             StyleModel, ArtworkPriceModel, SeriesModel,
                             CategoryModel)
from users.models import Subscribe, UserSubscribe
from artists.models import FavoriteArtistModel

User = get_user_model()


class Base64ImageField(serializers.ImageField):
    def to_internal_value(self, data):
        if isinstance(data, str) and data.startswith('data:image'):
            format, imgstr = data.split(';base64,')
            ext = format.split('/')[-1]

            data = ContentFile(base64.b64decode(imgstr), name='temp.' + ext)

        return super().to_internal_value(data)


class UserCreateSerializer(serializers.ModelSerializer):
    '''Сериализатор создание пользователя'''
    password = serializers.CharField(write_only=True)
    phone_number = serializers.RegexField(
        regex=r'^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$',
        max_length=60)

    class Meta:
        model = User
        fields = [
            'id',
            'name',
            'surname',
            'password',
            'email',
            'phone_number'
        ]

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

    def validate_phone_number(self, phone_number):
        if User.objects.filter(phone_number=phone_number).exists():
            raise serializers.ValidationError(
                {'ERROR': 'phone number exists'}
            )
        return phone_number

    def validate_password(self, password):
        try:
            validators.validate_password(password=password)
        except exceptions.ValidationError as e:
            raise serializers.ValidationError(e.messages)
        return password


class UserRetriveSerializer(serializers.ModelSerializer):
    '''Сериализатор карточки юзера'''
    class Meta:
        model = User
        fields = [
            'id',
            'email',
            'name',
            'surname',
            'phone_number',
            'status',
            'subscription'
        ]


class SubscribeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscribe
        fields = '__all__'


class SubscribeUserSerializer(serializers.ModelSerializer):
    email = serializers.CharField(source='user_id.email')
    price = serializers.IntegerField(source='subscribe.price')
    sub_time = serializers.CharField(source='subscribe.sub_time')

    class Meta:
        model = UserSubscribe
        fields = [
            'email',
            'price',
            'sub_time',
            'time_off'
        ]


FIELDS_FOR_ART_OBJECTS = (
    'title', 'artist', 'description', 'imageUrl',
    'size', 'orientation', 'brushstrokes_material',
    'style', 'decoration', 'year',
    'series', 'author_signature', 'email', 'id'
)


class ArtListSerializer(serializers.ModelSerializer):
    '''Сериализатор для каталога арт-объектов'''
    title = serializers.CharField(source='name')
    artist = serializers.CharField(source='author')
    year = serializers.CharField()
    email = serializers.EmailField(source='user.email', write_only=True)
    description = serializers.CharField()
    series = serializers.CharField()
    imageUrl = Base64ImageField(source='image')
    class Meta:
        model = ArtworkModel
        fields = FIELDS_FOR_ART_OBJECTS
        extra_kwargs = {
            'price': {'read_only': True},
        }


class AuthorSerializer(serializers.ModelSerializer):
    '''Сериализатор автора произведения'''
    class Meta:
        model = ArtistModel
        fields = ('id', 'name',)


class ArtObjectSerializer(ArtListSerializer):
    '''Сериализатор для карточки товара'''
    about_author = serializers.CharField(
        source='author.about_artist', read_only=True
    )
    author_name = serializers.CharField(
        source='author.name', read_only=True
    )
    author_photo = serializers.ImageField(
        source='author.photo', read_only=True
    )
    author_user_id = serializers.IntegerField(
        source='author.user_id', read_only=True
    )

    class Meta:
        model = ArtworkModel
        fields = (
            FIELDS_FOR_ART_OBJECTS
            + ('about_author', 'author_name', 'author_photo', 'author_user_id')
        )


class ArtPriceSerializer(serializers.ModelSerializer):
    '''Сериализатор отображения цен для произведения'''
    original_price = serializers.IntegerField()
    copy_price = serializers.IntegerField()

    class Meta:
        model = ArtworkPriceModel
        fields = ('__all__')


class FavoriteArtworkSerializer(serializers.ModelSerializer):
    '''Сериализатор избранных произведений'''
    art_photo = serializers.ImageField(source='artwork.image')
    artist_name = serializers.CharField(source='artwork.author.name')
    art_name = serializers.CharField(source='artwork.name')
    original_price = serializers.SerializerMethodField()
    poster_price = serializers.SerializerMethodField()

    def get_original_price(self, obj):
        result = ArtworkPriceModel.objects.filter(artwork=obj.artwork).first()
        serializer = ArtPriceSerializer(result)
        return (serializer.data['original_price'])

    def get_poster_price(self, obj):
        result = ArtworkPriceModel.objects.filter(artwork=obj.artwork).first()
        serializer = ArtPriceSerializer(result)
        return (serializer.data['copy_price'])

    class Meta:
        model = FavoriteArtworkModel
        fields = (
            'art_name', 'artwork', 'art_photo',
            'artist_name', 'original_price', 'poster_price'
        )


class NewsSerializer(serializers.ModelSerializer):
    '''Сериализатор новостей'''
    date_pub = serializers.DateTimeField('%d.%m.%Y')

    class Meta:
        model = NewsModel
        fields = '__all__'


class StyleSerializer(serializers.ModelSerializer):
    """Сериализатор для стилей"""
    class Meta:
        model = StyleModel
        fields = ('name',)


class FavoriteSerializer(serializers.ModelSerializer):
    '''Сериализатор для избранных авторов'''
    name = serializers.CharField(source='artist.name')
    about_artist = serializers.CharField(source='artist.about_artist')
    imageUrl = Base64ImageField(source='artist.photo')

    class Meta:
        model = FavoriteArtistModel
        fields = (
            'name',
            'about_artist',
            'imageUrl'
        )


"""
Группа сериализаторов для эндпоинтов v2
"""
class TestArtistModelSerializer(serializers.ModelSerializer):
    artist_id = serializers.IntegerField(source='id', read_only=True)
    class Meta:
        model = ArtistModel
        fields = (
            'name',
            'about_artist',
            'photo',
            'artist_id'
        )


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryModel
        fields = ('name', )

class SeriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SeriesModel
        fields = ('name', )

class TestArtWrokSerializer(serializers.ModelSerializer):
    author = TestArtistModelSerializer()
    style = StyleSerializer(allow_null=True)
    series = SeriesSerializer(allow_null=True)
    category = CategorySerializer(allow_null=True)
    #image = Base64ImageField()
    price = serializers.SerializerMethodField()
    class Meta:
        model = ArtworkModel
        fields = (
            'author',
            'name',
            'year',
            'size',
            'style',
            'series',
            'category',
            'brushstrokes_material',
            'is_estimate',
            'is_on_sold',
            'orientation',
            'decoration',
            'author_signature',
            'description',
            #'image',
            'price',
            'id'
        )
    
    def get_price(self, price):
        # Метод полуения цены работает как для создания так и для представления
        price = 120
        return price
    
    def create(self, validated_data):
        '''
            При создании вытаскивает стиль и серию если поля незаполнены
            выставляет null, в ином случае либо достает данные(стиля, серии)из бд
            либо создает новые
        '''
        style = validated_data.pop('style')
        series = validated_data.pop('series')
        artwork = ArtworkModel.objects.create(**validated_data)
        if series:
            current_series, _ = SeriesModel.objects.get_or_create(
                **series, author=validated_data['author']
            )
            artwork.series = current_series
        if style:
            current_style, _ = StyleModel.objects.get_or_create(
                **style
            )
            artwork.style = current_style
        
        
        return artwork

    def validate_category(self, category):
        '''
            Выдает категорию либо оствляет поле пустым в случаях
            если категория не найдена или не задана
        '''
        if category:
            try:
                return CategoryModel.objects.get(name=category['name'])
            except Exception:
                return None
        return None

    def validate_author(self, author):
        artist, _ = ArtistModel.objects.get_or_create(**author)
        return artist