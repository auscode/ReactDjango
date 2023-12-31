from django.shortcuts import render

# Create your views here.
def front( request,*args,**kwargs ):
    return render( request,'new.html')