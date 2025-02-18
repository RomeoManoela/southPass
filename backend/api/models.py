from django.contrib.auth.models import User
from django.db import models


class Password(models.Model):
    password = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="passwords")
    created_at = models.DateTimeField(auto_now_add=True)
    deleted = models.BooleanField(default=False)
    description = models.CharField(max_length=200)
