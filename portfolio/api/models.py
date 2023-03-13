from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class About(models.Model):
    name=models.CharField(max_length=256)
    image=models.ImageField(upload_to="Image")
    
    def __str__(self):
        return str(self.name)
class AboutMe(models.Model):
    description=models.TextField()
    
    def __str__(self):
        return str(self.description)
    
class MyProject(models.Model):
    image=models.ImageField(upload_to="Project Image")
    description=models.TextField()
    title=models.CharField(max_length=200)
    
    def __str__(self):
        return str(self.title)
class Work(models.Model):
    name=models.CharField(max_length=200)
    role=models.CharField(max_length=200)
    work=models.TextField()
    timeperiod=models.CharField(max_length=200)
    
    def __str__(self):
        return str(self.name)
    
class Skills(models.Model):
    name=models.CharField(max_length=200)
    def __str__(self):
        return str(self.name)

