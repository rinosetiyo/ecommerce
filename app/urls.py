from django.urls import path
from app import views

urlpatterns = [
    path('', views.index, name="index"),
    path('store/', views.store_page, name="store_page"),
    path('store/<slug:category_slug>/', views.store, name="store"),
    path('store/<slug:category_slug>/<slug:product_slug>/', views.product_detail, name="product_detail"),
    path('search/', views.search, name="search"),
    path('cart/', views.cart, name="cart"),
    path('cart/', views.cart_all, name="cart_all"),
    path('cart/add_cart/<int:product_id>', views.add_cart, name="add_cart"),
    path('cart/remove_cart/<int:product_id>', views.remove_cart, name="remove_cart"),
    path('cart/remove_cart_item/<int:product_id>', views.remove_cart_item, name="remove_cart_item"),
]