from django.shortcuts import render
from django.http import HttpResponse

from .models import About,AboutMe,MyProject,Work,Skills
from .serializers import AboutSerializer,AboutMeSerializer,MyProjectSerializer,WorkSerializer,SkillsSerializer
from rest_framework import viewsets

# Create your views here.


class AboutView(viewsets.ModelViewSet):
    queryset=About.objects.all()
    serializer_class=AboutSerializer
    
class AboutMeView(viewsets.ModelViewSet):
    queryset=AboutMe.objects.all()
    serializer_class=AboutMeSerializer
    
class MyProjectVIew(viewsets.ModelViewSet):
    queryset=MyProject.objects.all()
    serializer_class=MyProjectSerializer
    
class WorkView(viewsets.ModelViewSet):
    queryset=Work.objects.all()
    serializer_class=WorkSerializer
    
class SkillsView(viewsets.ModelViewSet):
    queryset=Skills.objects.all()
    serializer_class=SkillsSerializer
    

    
