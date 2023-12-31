from django.urls import path
from .views import *


app_name = "frontend"

urlpatterns = [
    path("", front, name="front")
]
