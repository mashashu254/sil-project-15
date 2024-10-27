from rest_framework import serializers
#from .models import Item
from django.contrib.auth.models import User

"""
serializers : convert complex data types (like querysets and model instances) into native Python data types that can then be easily rendered into JSON, XML or other content types	
		- often used in Django REST framework to handle API requests and responses
"""

# Example of item serializer
# class ItemSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Item
#         fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User  # using Django's built-in User model
        fields = ['username', 'email', 'password']  # fields we want to expose in the API

    def create(self, validated_data):
        # The create method is used to create a new User instance
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email'),
            password=validated_data['password']  # being hashed internally by Django
        )
        return user
        

