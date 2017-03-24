'use strict'

var imprint=angular.module('imprint',['ui.router','ngAnimate','imprintControllers','ngMaterial']);
imprint.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('welcome', {
        url:'/welcome',
        templateUrl: 'views/welcome.html',
        controller:'Welcome'
   })
   //Tabs-Container
   .state('main', {
       abstract: true,
       url:'/main',
       templateUrl: 'views/main.html'
   })
   .state('main.home', {
     url:'/home',
       templateUrl: 'views/home.html',
       controller:'HomeCtrl'
  })
   .state('main.add', {
     url:'/add',
       templateUrl: 'views/add.html',
       controller:'AddCtrl'
   })
   .state('main.view', {
     url:'/view',
       templateUrl: 'views/view.html',
       controller:'ViewCtrl'
      })
  .state('main.update', {
    url:'/update',
      templateUrl: 'views/update.html',
      controller:'UpdateCtrl'
 })

  .state('main.about', {
    url:'/about',
      templateUrl: 'views/about.html',
      controller:'AboutCtrl'
 });


 $urlRouterProvider.otherwise("/welcome");
})
