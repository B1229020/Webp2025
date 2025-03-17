from django.urls import path
from . import views

'''
urlpatterns = [
    path('', views.myIndex, name='index'),  # 設定路由
]
'''
'''
urlpatterns = [
    path('', views.HelloApiView.as_view(), name= 'index'),
]
'''
''' Lab2
urlpatterns = [
    path('add', views.add_post, name = 'add_post'),
    path('list', views.list_post, name = 'list_post'),
]
'''
'''mysql
urlpatterns = [
    path('users', views.list_users, name = 'list_users'),
]
'''
# HW1
urlpatterns = [
    path('addcourse', views.add_post, name = 'add_post'),
    path('courselist', views.list_post, name = 'list_post'),
]