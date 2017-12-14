angular.module('ieee',['ngAnimate','memberRoute','memberController',"memberService"])


    //For whats app sharing of the entry
    .config(function($compileProvider){
        //other configuration code here
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(whatsapp):/);
    });