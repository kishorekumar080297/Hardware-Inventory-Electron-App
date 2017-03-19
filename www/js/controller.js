angular.module('imprintControllers',[])
.controller('Welcome',function($timeout,$location){
  $timeout(function() {
     $location.path('/main');
     }, 3000);
})
.controller('Main',function(){

})
