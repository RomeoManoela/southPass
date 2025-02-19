from django.urls import path

from . import views

urlpatterns = [
    path(
        "passwords/",
        views.PasswordListCreateAPI.as_view(),
        name="password-list-create",
    ),
    path(
        "password/<int:pk>/",
        views.PasswordRetrieveUpdateDestroyAPI.as_view(),
        name="password-retrieve",
    ),
    path("register/", views.UserCreateAPI.as_view(), name="register"),
    path(
        "token-obtain/",
        views.CustomTokenObtainPairView.as_view(),
        name="token_obtain_pair",
    ),
    path(
        "token-refresh/", views.CustomTokenRefreshView.as_view(), name="token_refresh"
    ),
    path("get-user/", views.get_user, name="get-user"),
]
