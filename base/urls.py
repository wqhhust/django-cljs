from django.conf.urls import patterns, include, url


urlpatterns = [
    url("$^", "base.views.index", name="index"),
]

