from django.shortcuts import render
from rest_framework import generics

# for user registration
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework.permissions import AllowAny

# for items
# from .models import Item
# from .serializers import ItemSerializer

# Create your views here.
"""
	views : handle the request and return the response
"""

# Example of a simple view
# class ItemListCreate(generics.ListCreateAPIView):
#     queryset = Item.objects.all()
#     serializer_class = ItemSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all() # get all users
    permission_classes = (AllowAny,)  # Allow public access to registration
    serializer_class = UserSerializer