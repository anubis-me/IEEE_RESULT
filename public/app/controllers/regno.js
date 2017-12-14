angular.module('memberController',['memberService'])

.controller("transition",function ($http,$timeout,$location,postreg) {
    var app = this;
    app.regnum="";
    app.loadm=true;
    app.lo=true;
    app.one=true; app.two=false; app.three=false; app.four=false;
    $timeout(function () {
        app.one=false;
        app.two=true;
    }, 2000);
    $timeout(function () {
        app.two = false;
        app.three = true;
    }, 4000);
    $timeout(function () {
        app.three=false;
        app.four=true;
    }, 6000);
    if(app.regnum=='')
    {
        $timeout(function () {
            $location.path('/regsubmit');
        }, 8000);
    }
    $timeout(function () {
        app.loadm=false;
        }, 2500);

    //input counter fest type message
    this.checkreg = function (regdata) {
       $location.path('/load');
       $timeout(function () {
           postreg.regpost(app.regdata).then(function (data) {
               if(data.data.success==false){
                   var reg= "lol";
                   localStorage.setItem("token2",reg);
                   app.regnum = localStorage.getItem("token2");
                   $location.path('/nselected');
               }
               else if(data.data.success==true){
                   var token = data.data.mess;
                   var token1 = data.data.regnum;
                   localStorage.setItem("token", token);
                   localStorage.setItem("token1", token1);
                   $location.path('/surprise');
                   app.mess = localStorage.getItem("token");
                   app.regnum = localStorage.getItem("token1");
               }
               else{
                   $location.path('/');
                    }
                });
           },2000);
    };
    this.roun=function (formdata) {
        $location.path('/load');
        postreg.creater(app.formdata).then(function (data) {
            $timeout(function () {
                $location.path('/selected');
            }, 3000);
        });
    }

});