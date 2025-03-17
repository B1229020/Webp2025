from django.db import models

# Create your models here.
'''lab2
class Post(models.Model):
    title = models.CharField(max_length = 100)
    content = models.TextField(blank = True)
    photo = models.URLField(blank = True)
    location = models.CharField(max_length = 100)
    created_at = models.DateTimeField(auto_now_add = True)
'''
'''mysql
class User(models.Model):
    user_id = models.CharField(max_length = 150)
    first_name = models.CharField(max_length = 100)
    last_name = models.Charfield(max_length = 2048)
    last_login = models.DataTimeField(auto_now_add = True)
    picture = models.CharFiend(max_length = 2048)
'''
# HW1
class Post(models.Model):
    Department = models.CharField(max_length = 100)
    CourseTitle = models.CharField(max_length = 100)
    Instructor = models.CharField(max_length = 100, null = True, blank = True)
