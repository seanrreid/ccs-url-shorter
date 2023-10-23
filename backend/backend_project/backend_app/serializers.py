from .models import Url
from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

# Look into this:
# https://www.django-rest-framework.org/api-guide/relations/#hyperlinkedrelatedfield

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name']

class UrlSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Url
        fields = ['title', 'original_url', 'short_url', 'user']

