angular.module('memberService',[])

    .factory('postreg',function ($http) {
        wishfactory = {};

        //player.create(regdata)
        wishfactory.regpost = function (regdata) {
            return $http.post('/api/checkregis',regdata);
        };
        wishfactory.creater= function (regdata) {
            return $http.post('/api/answ',regdata);
        };

        return wishfactory;
    });

