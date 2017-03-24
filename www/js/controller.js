angular.module('imprintControllers',[])
.controller('Welcome',function($timeout,$location,$state){
  $timeout(function() {
     $state.go('main.home');
   }, 3000);
})

.controller('HomeCtrl',function(){

})
.controller('AddCtrl',function(){

})
.controller('ViewCtrl',function(){

})
.controller('UpdateCtrl',function(){

})
.controller('AboutCtrl',function(){

});
