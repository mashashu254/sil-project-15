from django.urls import path
#from .views import ItemListCreate # example of a simple view
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import RegisterView


urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Login
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Refresh JWT token
    path('register/', RegisterView.as_view(), name='register'), # User registrastion endpoint
]
