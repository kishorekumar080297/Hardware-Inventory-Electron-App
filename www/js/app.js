'use strict'

var imprint=angular.module('imprint',['ngRoute','imprintControllers'])
imprint.config(function($routeProvider, $locationProvider){
    $routeProvider.when('/welcome', {
        templateUrl: 'views/welcome.html',
        controller:'Welcome'
   })

   $routeProvider.when('/main', {
     cache: false,
     templateUrl: 'views/main.html',
     controller:'Main'
   })
  //  .otherwise({
  //    redirectTo:'/main'
  //  })

      .otherwise({
        redirectTo:'/welcome'
      })


// $locationProvider.hashPrefix('');
});
