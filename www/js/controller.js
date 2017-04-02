angular.module('imprintControllers',[])
.controller('Welcome',function($timeout,$location,$state){
  $timeout(function() {
     $state.go('main.home');
   }, 3000);
})

.controller('HomeCtrl',function($scope,$state, $http){
  // $scope.goToAbout=function(){
  //   $state.go("main.about");
  // };
  $http.get("http://localhost:3012/getAll")
      .success(function(response) {
        $scope.sys_det_data = [];
        $scope.temp = JSON.parse(response[0]);
        // $scope.temp.forEach(function(eachItem){
        //     $scope.sys_det_data.push(eachItem.system_details);
        // });
         $scope.uuid = $scope.temp.system_details['uuid'];
         $scope.sys_det_data.push($scope.temp.system_details);
      });

  $scope.goToView=function(){
    $state.go("view");
  };
  $scope.goToUpdate=function(){
    $state.go("update");
  };
  $scope.clientDetails=[
    {
      "systemName":"DESKTOP-N0A2H3S",
      "uuid":"3CACEA81-5676-11E4-9F6E-68F7280FE6CF",
      "ip":"192.168.2.2"
    },
    {
      "systemName":"DESKTOP-N0A2H3S",
      "uuid":"4BDJSKEA81-5676-11E4-9F6E-6FFFS7280FE6CF",
      "ip":"192.168.2.1"
    }
  ]
})
.controller('AddCtrl',function($scope,$state){
  $scope.goToFill=function(){
    $state.go("hwDetails");
  };
})
.controller('ViewCtrl',function($scope,$state,$http){
  $scope.goToHome=function(){
    $state.go('main.home');
  }
  $http.get("http://localhost:3012/getAll")
      .success(function(response) {
        $scope.sys_det_data = [];
        $scope.temp = JSON.parse(response[0]);
        // $scope.temp.forEach(function(eachItem){
        //     $scope.sys_det_data.push(eachItem.system_details);
        // });
         $scope.uuid = $scope.temp.system_details['uuid'];
         $scope.sys_det_data.push($scope.temp.system_details);
      });
  $scope.sysDet=[
    {
    "uuid":"3CACEA81-5676-11E4-9F6E-68F7280FE6CF",
    "ip":"192.168.2.2",
    "manufacturer":"LENOVO",
    "version":"Lenovo Z50-70",
    "serialNumber":"1040295903378"
  },
]
  $scope.procDetails=[
    {
      "name":"Intel(R) Core(TM) i7-4510U CPU @ 2.00GHz",
      "description":"Intel64 Family 6 Model 69 Stepping 1",
      "DeviceID":"",
      "manufacturer":"",
      "processorID":"",
      "systemName":"",
    },
  ]
  $scope.boardDetails=[
    {

    },
  ]
  $scope.gpuDetails=[
    {

    },
  ]
  $scope.mouseDetails=[
    {

    },
  ]
  $scope.keyboardDetails=[
    {

    },
  ]
  $scope.driveDetails=[
    {

    },
  ]
})
.controller('UpdateCtrl',function(){

})
.controller('AboutCtrl',function(){

})
.controller('FillCtrl',function($scope,$state,$mdToast){
  $scope.goToAdd=function(){
    $state.go("main.add");
  };
  $scope.goToAuto=function(){
    $state.go("autoFill");
  };
  $scope.goToHw2=function(){
    $state.go("hwDetails2");
  };
})
.controller('Fill2Ctrl',function($scope,$state){
  $scope.goToHw1=function(){
    $state.go("hwDetails");
  };
})
.controller('AutoFillCtrl',function($scope,$state){
  $scope.goToAdd=function(){
    $state.go("main.add");
  };
});
