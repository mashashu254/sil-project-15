from django.db import models


# Create your models here.
"""
	models : define the structure of your database
		- each class is a table in the database
		- each attribute is a column in the table
		- each instance of the class is a row in the table
		- each attribute is a field in the row
		- each attribute has a type (CharField, IntegerField, etc)
	
	summary:
		- models define the structure of our database
		- serializers convert complex data types into native Python data types
		- views handle the request and return the response
"""

# simple model for demonstration purposes
# class Item(models.Model):
#     name = models.CharField(max_length=100)
#     description = models.TextField()

#     def __str__(self):
#         return self.name



