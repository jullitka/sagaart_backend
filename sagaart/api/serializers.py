from django.contrib.auth import get_user_model
from rest_framework import serializers

from artworks.models import ArtistModel, ArtworkModel
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
    'style', 'decoration', 'price', 'year',
    'series', 'author_signature', 'email',
)


class ArtListSerializer(serializers.ModelSerializer):
    '''Сериализатор для каталога арт-объектов'''
    title = serializers.CharField(source='name')
    artist = serializers.CharField(source='author')
    year = serializers.CharField(write_only=True)
    email = serializers.EmailField(source='user.email', write_only=True)
    description = serializers.CharField()
    imageUrl = serializers.CharField(source='image')

    class Meta:
        model = ArtworkModel
        fields = FIELDS_FOR_ART_OBJECTS
        extra_kwargs = {
           'price': {'read_only': True},
        }


class ArtObjectSerializer(ArtListSerializer):
    '''Сериализатор для карточки товара'''
    pass


class AuthorSerializer(serializers.ModelSerializer):
    '''Сериализатор автора произведения'''
    class Meta:
        model = ArtistModel
        fields = ('id', 'name',)
