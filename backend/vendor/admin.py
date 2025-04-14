from django.contrib import admin
from vendor.models import Vendor, VendorProfile, VendorPayout, VendorNotification, VendorWallet, VendorReview, VendorDiscount, VendorProduct, VendorProductImage, VendorProductVariant, VendorProductVariantImage
# Register your models here.

admin.site.register(Vendor)
admin.site.register(VendorProfile)
admin.site.register(VendorPayout)
admin.site.register(VendorNotification)
admin.site.register(VendorWallet)
admin.site.register(VendorReview)
admin.site.register(VendorDiscount)
admin.site.register(VendorProduct)
admin.site.register(VendorProductImage)
admin.site.register(VendorProductVariant)
admin.site.register(VendorProductVariantImage)  
