from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
User = get_user_model()

class Url(models.Model):
    title = models.CharField()
    original_url = models.CharField()
    short_url = models.CharField(max_length=256)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    @property
    def original_url_property(self):
        return self.original_url

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["title", "short_url", "original_url"]