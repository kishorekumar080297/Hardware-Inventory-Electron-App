'use strict'

var imprint=angular.module('imprint',['ui.router','imprintControllers','ngMaterial']);
imprint.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('welcome', {
        url:'/welcome',
        templateUrl: 'views/welcome.html',
        controller:'Welcome'
   })

   .state('main', {
       url:'/main',
     templateUrl: 'views/main.html',
     controller:'MainCtrl'
   })
   .state('main.home', {
     url:'/home',
     views:{
    'main-home':{
       templateUrl: 'views/main-home.html',
       controller:'HomeCtrl'
    }}
  })
   .state('main.add', {
     url:'/add',
     views:{
    'main-add':{
       templateUrl: 'views/main-add.html',
       controller:'AddCtrl'
    }}
   })
   .state('main.view', {
     url:'/view',
     views:{
    'main-home':{
       templateUrl: 'views/main-view.html',
       controller:'ViewCtrl'
    }}
  })
  .state('main.help', {
    url:'/help',
    views:{
   'main-help':{
      templateUrl: 'views/main-help.html',
      controller:'HelpCtrl'
   }}
 });


 $urlRouterProvider.otherwise("/welcome");
});
