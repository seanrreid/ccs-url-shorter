from rest_framework import status, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

from .models import Url
from .serializers import UrlSerializer

# Create your views here.


class UrlViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]

    queryset = Url.objects.all().order_by('title')
    serializer_class = UrlSerializer


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):

        try:
            print(request)
            print(request.data)
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)

            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            print(e)
            return Response(status=status.HTTP_400_BAD_REQUEST)
