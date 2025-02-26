from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Password


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "password")
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class PasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Password
        fields = "__all__"
        extra_kwargs = {"user": {"read_only": True}}
