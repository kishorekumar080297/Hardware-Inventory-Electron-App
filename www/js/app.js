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
     controller:'MainCtrl'
   })
   $routeProvider.when('/main.home', {
     url:'/home',
     views:{
    'main-home':{
       templateUrl: 'views/main-home.html',
       controller:'HomeCtrl'
    }
    }
   })
   $routeProvider.when('/main.add', {
     url:'/home',
     views:{
    'main-add':{
       templateUrl: 'views/main-add.html',
       controller:'AddCtrl'
    }
  }
   })
   $routeProvider.when('/main.view', {
     url:'/view',
     views:{
    'main-home':{
       templateUrl: 'views/main-view.html',
       controller:'ViewCtrl'
    }
    }
   })
  //  .otherwise({
  //    redirectTo:'/main'
  //  })

      .otherwise({
        redirectTo:'/welcome'
      })


// $locationProvider.hashPrefix('');
});
