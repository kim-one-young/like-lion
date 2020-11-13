from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'index.html')

def se(request):
    return render(request,'2th.html')