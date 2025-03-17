#from django.shortcuts import render
#from django.http import HttpResponse

# Create your views here.
'''
def myIndex(request):
    my_name = request.GET.get('name' , "CGU")
    #my_name = request.POST.get('name' , "CGU")
    return HttpResponse("Hello " + my_name)
'''
'''
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class HelloApiView(APIView):
    def get(self, request):
        my_name = request.GET.get('name', None)
        if my_name:
            retValue = {}
            retValue['data'] = "Hello" + my_name
            return Response(retValue, status = status.HTTP_200_OK)
        else:
            return Response(
                {"res": "parameter: name is None"},
                status = status.HTTP_400_BAD_REQUEST
            )
'''

# lab2 & HW1
from rest_framework import status
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.core.serializers.json import DjangoJSONEncoder
import json
import logging

from .models import Post

logger = logging.getLogger('django')

''' Lab2
@api_view(['GET'])
def add_post(request):
    title = request.GET.get('title', '')
    content = request.GET.get('content', '')
    photo = request.GET.get('photo', '')
    location = request.GET.get('location', '')

    new_post = Post()
    new_post.title = title
    new_post.content = content
    new_post.photo = photo
    new_post.location = location
    new_post.save()
    logger.debug(" ************** myhello_api: " + title)
    if title:
        return Response({"data": title + " insert!"}, status = status.HTTP_200_OK)
    else:
        return Response(
            {"res": "parameter: name is None"},
            status = status.HTTP_400_BAD_REQUEST
        )
'''
'''lab2
@api_view(['GET'])
def list_post(request):
    posts = Post.objects.all().values()
    return JsonResponse(list(posts), safe = False)
# 
    return Response({"data":
                    json.dumps(
                        list(posts),
                        sort_keys = True,
                        indent = 1,
                        cls = DjangoJSONEncoder
                    )},
                    status = status.HTTP_200_OK)
# 
'''
# HW1
@api_view(['POST'])
def add_post(request):
    Department = request.data.get('Department', '')
    CourseTitle = request.data.get('CourseTitle', '')
    Instructor = request.data.get('Instructor', '')

    new_post = Post()
    new_post.Department = Department
    new_post.CourseTitle = CourseTitle
    new_post.Instructor = Instructor
    new_post.save()
    logger.debug(" ************** myhello_api: " + Department)
    if not Department or not CourseTitle or not Instructor:
        return Response(
            {"res": "All fields (Department, CourseTitle, Instructor) are required!"},
            status = status.HTTP_400_BAD_REQUEST
        )
    else:
        return Response({"data": f"{CourseTitle} created successfully!"}, status = status.HTTP_201_CREATED)

def list_post(request):
    posts = Post.objects.all().values("Department", "CourseTitle", "Instructor")
    return JsonResponse(list(posts), safe = False)