from django.db import models
from django.urls import reverse
# Create your models here.
class Category(models.Model):
    category_name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    description= models.TextField()
    image = models.ImageField(upload_to='photos/categories', blank=True)
    
    # def get_url(self):
    #     return reverse('store', args=[self.slug])
    
    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.category_name
    
class Product(models.Model):
	product_name = models.CharField(max_length=100)
	slug = models.SlugField(max_length=100, unique=True)
	description = models.TextField()
	price = models.IntegerField()
	image = models.ImageField(upload_to='photos/products', blank=True)
	stock = models.IntegerField()
	is_available = models.BooleanField(default=True)
	category = models.ForeignKey(Category, on_delete=models.CASCADE)
	created_at = models.DateTimeField(auto_now_add=True)
	modified_at = models.DateTimeField(auto_now=True)
	
	def get_url(self):
		return reverse('product_detail', args=[self.category.slug, self.slug])

	def __str__(self):
		return self.product_name
      
class Cart(models.Model):
	date_added = models.DateTimeField(auto_now_add=True)
	
	def __str__(self):
		return self.id

class CartItem(models.Model):
	product = models.ForeignKey(Product,on_delete=models.CASCADE)
	cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
	quantity = models.IntegerField()
	is_active = models.BooleanField(default=True)
	
	def __str__(self):
		return self.product