from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# Create your models here.
class MyAccountManager(BaseUserManager):
    # def create_user(self, first_name, last_name, email, password=None):
    #     if not email:
    #         raise ValueError("user must have an email address")
    #     if not username:
    #         raise ValueError("user must have an username")
        
    #     user - self.model(
    #         email = self.normalize_email(email),
    #         username = username,
    #         first_name = first_name,
    #         last_name = last_name,
    #     )

    #     user.set_password(password)
    #     user.save(using=self.db)
    #     return user

    def create_user(self, email, password, **kwargs):
        """
        Create and save a user with the given email and password.

        Args:
            email: The email address of the user.
            password: The password of the user.
            **kwargs: Keyword arguments that will be passed to the `User` constructor.

        Returns:
            The newly created user.
        """

        if not email:
            raise ValueError("Users must have an email address")

        if not password:
            raise ValueError("Users must have a password")

        user = self.model(email=email, **kwargs)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, **kwargs):
        """
        Create and save a superuser with the given email and password.

        Args:
            email: The email address of the user.
            password: The password of the user.
            **kwargs: Keyword arguments that will be passed to the `User` constructor.

            The following keyword arguments are required:
                is_admin: Whether the user is an administrator.
                is_active: Whether the user is active.
                is_staff: Whether the user is a staff member.
                is_superadmin: Whether the user is a superadmin.

        Returns:
            The newly created user.
        """

        if not email:
            raise ValueError("Users must have an email address")

        if not password:
            raise ValueError("Users must have a password")

        kwargs["is_admin"] = True
        kwargs["is_active"] = True
        kwargs["is_staff"] = True
        kwargs["is_superadmin"] = True

        user = self.model(email=email, **kwargs)
        user.set_password(password)
        user.save(using=self._db)
        return user

class Account(AbstractBaseUser):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=100, unique=True)
    phone_number = models.CharField(max_length=100)

    # required
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now_add=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_superadmin = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username','first_name','last_name']

    objects = MyAccountManager()

    def __str__(self):
        return self.email
    
    def has_perm(self, perm, obj=None):
        return self.is_admin
    
    def has_module_perms(self, add_label):
        return True