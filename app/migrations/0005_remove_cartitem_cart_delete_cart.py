# Generated by Django 4.2.5 on 2023-09-11 07:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_cart_cartitem'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cartitem',
            name='cart',
        ),
        migrations.DeleteModel(
            name='Cart',
        ),
    ]
