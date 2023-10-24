from rest_framework import status, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.shortcuts import get_object_or_404

from .models import Url
from .serializers import UrlSerializer

# Create your views here.


class UrlViewSet(viewsets.ModelViewSet):
    # permission_classes = [IsAuthenticated]

    queryset = Url.objects.all().order_by('title')
    serializer_class = UrlSerializer


class RedirectView(APIView):
    model = Url

    def get(self, request, short_url):
        try:
            short_url = self.kwargs.get('short_url')
            foo = get_object_or_404(Url, short_url=short_url)
            print(foo.original_url_property)
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):

        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
