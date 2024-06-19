from django.contrib.auth import get_user_model
from rest_framework import serializers

from artworks.models import ArtistModel, ArtworkModel
from users.models import Subscribe, UserSubscribe


User = get_user_model()


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


fields_for_art_objects = (
    'title', 'artist', 'description', 'imageUrl',
    'size', 'orientation', 'brushstrokes_material',
    'style', 'decoration', 'price', 'year',
    'series', 'author_signature', 'email',
)


class ArtListSerializer(serializers.ModelSerializer):
    title = serializers.CharField(source='name')
    artist = serializers.CharField(source='author')
    year = serializers.CharField(write_only=True)
    email = serializers.EmailField(source='user.email', write_only=True)
    description = serializers.CharField()
    imageUrl = serializers.CharField(source='image')

    class Meta:
        model = ArtworkModel
        fields = fields_for_art_objects
        extra_kwargs = {
            'price': {'read_only': True},
        }


class ArtObjectSerializer(ArtListSerializer):
    pass


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArtistModel
        fields = ('id', 'name',)
