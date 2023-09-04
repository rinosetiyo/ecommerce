from django.contrib import admin
from accounts.models import Account
from django.contrib.auth.admin import UserAdmin

# Register your models here.
class AccountAdmin(UserAdmin):
	list_display = ('email','first_name','username','last_login','date_joined','is_admin')
	readoly_fields = ('last_login','date_joined')
	ordering = ('-date_joined',)

	filter_horizontal = ()
	list_filter = ()
	fieldsets = ()
	
admin.site.register(Account, AccountAdmin)