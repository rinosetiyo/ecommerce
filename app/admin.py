from django.contrib import admin
from app.models import Category, Product, Cart, CartItem

# Register your models here.
class CategoryAdmin(admin.ModelAdmin):
	list_display = ('category_name',)
	prepopulated_fields = {'slug':('category_name',)}

class ProductAdmin(admin.ModelAdmin):
	list_display = ('product_name','price','stock','created_at','modified_at','is_available')
	prepopulated_fields = {'slug':('product_name',)}

admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Cart)
admin.site.register(CartItem)