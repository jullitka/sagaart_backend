from django.test import TestCase

from api.market_serializers import (ArtworkToShoppingCartAuthorSerializer,
                                    ArtworkToShoppingCartSerializer)
from artists.models import ArtistModel
from artworks.models import ArtworkModel, StyleModel
from users.models import User


class TestArtworkToShoppingCartAuthorSerializer(TestCase):
    """Тест сериализатора автора для произведения в корзине покупок"""
    def test_serializer(self):
        artist = ArtistModel.objects.create(name='Test Artist')
        serializer = ArtworkToShoppingCartAuthorSerializer(instance=artist)
        self.assertEqual(serializer.data['name'], artist.name)


class ArtworkToShoppingCartSerializerTestCase(TestCase):
    """Тест сериализатора произведения в корзине покупок"""
    def setUp(self):
        self.serializer = ArtworkToShoppingCartSerializer()
        self.user = User.objects.create_user(
            name='testname',
            surname='testsurname',
            email='test@test.com',
            phone_number='11111111111',
            password='password'
        )
        self.author = ArtistModel.objects.create(name="Artist Name")
        self.style = StyleModel.objects.create(name="Abstract")
        self.artwork = ArtworkModel.objects.create(
            name='Test name',
            author=self.author,
            year=2020,
            size='50x70 cm',
            brushstrokes_material='Oil',
            style=self.style,
            image='path/to/image.jpg',
            user=self.user
        )

    def test_fields(self):
        expected_fields = (
            'name',
            'author',
            'year',
            'size',
            'brushstrokes_material',
            'style',
            'image',
        )
        self.assertEqual(self.serializer.Meta.fields, expected_fields)

    def test_serialization(self):
        serializer = ArtworkToShoppingCartSerializer(self.artwork)
        expected_data = {
            'name': 'Test name',
            'author': {
                'name': 'Artist Name'
            },
            'year': 2020,
            'size': '50x70 cm',
            'brushstrokes_material': 'Oil',
            'style': {
                'name': 'Abstract'
            },
            'image': '/media/path/to/image.jpg'
        }
        self.assertEqual(serializer.data, expected_data)
