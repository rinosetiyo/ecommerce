from django.db import models

# Create your models here.
class Category(models.Model):
    category_name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    description= models.TextField()
    image = models.ImageField(upload_to='photos/categories', blank=True)

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
	
	def __str__(self):
		return self.product_name