angular.module('memberController',['memberService'])

.controller("transition",function ($http,$timeout,$location,postreg) {
    var app = this;
    var regnum='';
    app.loadm=true;
    app.lo=true;
    app.one=true; app.two=false; app.three=false; app.four=false;app.five=false;
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

    $timeout(function () {
          app.four=false;
          app.five=true;
    }, 8000);

    $timeout(function () {
       app.loadm=false;
    }, 2500);


    //input counter fest type message
    this.checkreg = function (regdata) {
        $timeout(function () {
           postreg.regpost(app.regdata).then(function (data) {
               if(data.data.success==false){
                   var reg= "true";
                      $location.path('/nselected');
               }
               else if(data.data.success==true){
                   var token = data.data.mess;
                   var token1 = data.data.regnum;
                   $location.path('/surprise');

               }
               else{
                   $location.path('/');
                    }
                });
           },2000);

    };

})
    .controller("formda",function ($http,$timeout,$location,postreg) {
        this.roun = function (formdata) {
             postreg.creater(app.formdata).then(function (data) {
                $timeout(function () {
                    $location.path('/selected');
                }, 2000);
            });
        }

    });