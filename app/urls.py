from django.urls import path
from app import views

urlpatterns = [
    path('', views.index, name="index"),
    path('product-detail/<slug:slug>', views.product_detail, name="product_detail"),
]