
from django.urls import path,include
from .views import AboutView,AboutMeView,MyProjectVIew,WorkView,SkillsView

from rest_framework.routers import DefaultRouter
router=DefaultRouter()
router.register("about",AboutView,basename="about")
router.register("aboutMe",AboutMeView,basename="aboutme")
router.register("project",MyProjectVIew,basename="project")
router.register("work",WorkView,basename="work")
router.register("skills",SkillsView,basename="skills")


urlpatterns = [
    path("",include(router.urls)),
]
