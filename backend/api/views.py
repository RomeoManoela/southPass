from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .models import Password
from .serializers import UserSerializer, PasswordSerializer


class PasswordListCreateAPI(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = PasswordSerializer

    def get_queryset(self):
        return Password.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(user=self.request.user)


class PasswordRetrieveUpdateDestroyAPI(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = PasswordSerializer
    lookup_field = "pk"

    def get_queryset(self):
        return Password.objects.filter(user=self.request.user)


class UserCreateAPI(generics.CreateAPIView):
    permission_classes = (AllowAny,)
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CustomTokenObtainPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        res = super().post(request, *args, **kwargs)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.user

        res.data["user"] = {
            "id": user.id,
            "username": user.username,
        }
        refresh_token = res.data.get("refresh")
        res.set_cookie(
            key="refresh",
            value=refresh_token,
            httponly=True,
            secure=False,
            samesite="Lax",
            max_age=24 * 3600,
        )
        res.data.pop("refresh")
        return res


class CustomTokenRefreshView(TokenRefreshView):
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        refresh = request.COOKIES.get("refresh")
        request._full_data = {"refresh": refresh}
        res = super().post(request, *args, **kwargs)
        return res
