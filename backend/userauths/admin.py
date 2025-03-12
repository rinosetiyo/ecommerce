from django.contrib import admin
from userauths.models import User, Profile
from import_export.admin import ImportExportModelAdmin

# Register your models here.
class UserAdmin(ImportExportModelAdmin):
    list_display = ['email', 'full_name', 'phone']
    search_fields = ['email', 'full_name', 'phone']
    list_filter = ['email', 'full_name', 'phone']
    ordering = ['email', 'full_name', 'phone']

class ProfileAdmin(ImportExportModelAdmin):
    list_display = ['user', 'full_name']
    search_fields = ['user', 'full_name']

admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)