from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.

@csrf_exempt
def getText(request):
    print("asdfgh")
    print(request.body)
    req_dict = json.loads(request.body)
    print(req_dict["text"])
    return HttpResponse(req_dict["text"])