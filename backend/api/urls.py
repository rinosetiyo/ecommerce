from django.urls import path
from userauths import views as userauths_views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
# from store import views as store_views

urlpatterns = [
    path('user/token/', userauths_views.MyTokenObtainPairView.as_view()),
    path('user/token/refresh/', TokenRefreshView.as_view()),
    path('user/register/', userauths_views.RegisterView.as_view()),
]