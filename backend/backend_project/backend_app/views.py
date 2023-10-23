from rest_framework import status, viewsets
from rest_framework.response import Response

from .models import Url
from .serializers import UrlSerializer

# Create your views here.


class UrlViewSet(viewsets.ModelViewSet):
    queryset = Url.objects.all().order_by('title')
    serializer_class = UrlSerializer
