from rest_framework import serializers


class ArtWorkSerializer(serializers.ModelSerializer):
    style = serializers.StringRelatedField()
    price = serializers.SerializerMethodField()

    class Meta:
        model = pass
        fields = '__all__'

    def get_price(self, obj):
        price = ArtWork.objects.filter(artowork=obj).order_by(
            '-pub_date').first().values_list('price')
        return price


