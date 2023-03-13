from .models import About,AboutMe,MyProject,Work,Skills
from rest_framework import serializers


class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model=About
        fields=('id','name','image',)

class AboutMeSerializer(serializers.ModelSerializer):
    class Meta:
        model=AboutMe
        fields=('id','description',)
        
class MyProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model=MyProject
        fields=('id','image','description','title',)
        
class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model=Work
        fields=('id','name','role','work','timeperiod',)

class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Skills
        fields=('id','name',)
