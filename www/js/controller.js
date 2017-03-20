angular.module('imprintControllers',[])
.controller('Welcome',function($timeout,$location){
  $timeout(function() {
     $location.path('/main');
   }, 3000);
})
.controller('MainCtrl',function($scope,$location){
  $scope.goToHome=function(){
    $location.path('/main.home');
  }
  $scope.goToAdd=function(){
    $location.path('/main.add');
  }
  $scope.goToView=function(){
    $location.path('/main.view');
  }
})
.controller('HomeCtrl',function(){

})
.controller('AddCtrl',function(){

})
.controller('ViewCtrl',function(){

})
