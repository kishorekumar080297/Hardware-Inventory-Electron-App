angular.module('imprintControllers',[])
.controller('Welcome',function($timeout,$location,$state){
  $timeout(function() {
     $state.go('main');
   }, 3000);
})
.controller('MainCtrl',function($scope,$location,$state){
  $scope.goToHome=function(){
    $state.go('main.home');
  };
  $scope.goToAdd=function(){
    $state.go('main.add');
  };
  $scope.goToView=function(){
    $state.go('main.view');
  };
})
.controller('HomeCtrl',function(){

})
.controller('AddCtrl',function(){

})
.controller('ViewCtrl',function(){

});
