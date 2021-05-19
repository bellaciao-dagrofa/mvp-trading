from django.urls import path, include

from .views import LatestProductsList, ProductDetail, CategoryDetail, SearchProductView

urlpatterns = [
    path('latest-products/', LatestProductsList.as_view()),
    path('products/<slug:category_slug>/<slug:product_slug>/', ProductDetail.as_view()),
    path('products/<slug:category_slug>', CategoryDetail.as_view()),
    path('products_search/', SearchProductView.as_view())
]