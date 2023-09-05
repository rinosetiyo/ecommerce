from django.shortcuts import render
from app.models import Product

# Create your views here.
def index(request):
    products = Product.objects.all().filter(is_available=True)
    context = {
        'products':products,
    }
    return render(request, 'pages/index.html', context)

def product_detail(request, slug):
    product = Product.objects.get(slug=slug)
    context = {
        'product':product,
    }
    return render(request, 'pages/product-detail.html', context)