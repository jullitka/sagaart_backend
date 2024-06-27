import django.db
from django.contrib.auth import get_user_model
import django.contrib.auth.password_validation as validators
from django.core import exceptions

from rest_framework import serializers

from artworks.models import ArtistModel, ArtworkModel, FavoriteArtworkModel, StyleModel
from users.models import Subscribe, UserSubscribe

User = get_user_model()


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
    'series', 'author_signature', 'email',
)


class ArtListSerializer(serializers.ModelSerializer):
    '''Сериализатор для каталога арт-объектов'''
    title = serializers.CharField(source='name')
    artist = serializers.CharField(source='author')
    year = serializers.CharField()
    email = serializers.EmailField(source='user.email', write_only=True)
    description = serializers.CharField()
    series = serializers.CharField()
    imageUrl = serializers.CharField(source='image')

    class Meta:
        model = ArtworkModel
        fields = FIELDS_FOR_ART_OBJECTS
        extra_kwargs = {
            'price': {'read_only': True},
        }


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


class AuthorSerializer(serializers.ModelSerializer):
    '''Сериализатор автора произведения'''
    class Meta:
        model = ArtistModel
        fields = ('id', 'name',)


class FavoriteArtworkSerializer(serializers.ModelSerializer):
    '''Сериализатор избранных произведений'''
    artwork = serializers.IntegerField(source='artwork_id')

    class Meta:
        model = FavoriteArtworkModel
        fields = '__all__'

        
class StyleSerializer(serializers.ModelSerializer):
    """Сериализатор для стилей"""
    class Meta:
        model = StyleModel
        fields = ('name',)
