from django.urls import path
from . import views

'''
urlpatterns = [
    path('', views.myIndex, name='index'),  # 設定路由
]
'''

urlpatterns = [
    path('', views.HelloApiView.as_view(), name= 'index'),
]