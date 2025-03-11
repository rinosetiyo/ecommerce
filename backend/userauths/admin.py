from django.contrib import admin
from userauths.models import User, Profile

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ['email', 'full_name', 'phone']
    search_fields = ['email', 'full_name', 'phone']
    list_filter = ['email', 'full_name', 'phone']
    ordering = ['email', 'full_name', 'phone']

class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'full_name']
    search_fields = ['user', 'full_name']

admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)