var _ = require('underscore');

var socket = io.connect('http://localhost:3012');

console.log(socket)

socket.on('connect', function() {
  alert("CONNECTED")
});

socket.on('message', function(message){
    //content.prepend(message + '<br />');
    alert(message)
});

socket.on('disconnect', function() {
    console.log('disconnected');
    content.html("<b>Disconnected!</b>");
});

socket.connect();

angular.module('imprintControllers',[])
.controller('Welcome',function($timeout,$location,$state){
  $timeout(function() {
     $state.go('main.home');
   }, 3000);
})

.controller('HomeCtrl',function($scope,$state,$http){
  // $scope.goToAbout=function(){
  //   $state.go("main.about");
  // };
  var res;
  $http.get("http://localhost:3012/getAll")
      .success(function(response) {
        $scope.sys_det_data = [];
        var preTemp=JSON.stringify(response[0]);

        $scope.temp = JSON.parse(preTemp)

        // console.log($scope.temp1);
      //   if(response[0].length>1){
      //   $scope.temp1.forEach(function(eachItem){
      //       console.log(eachItem);
      //   });
      // }
      // else{
      // console.log(response[0]);
      if(response[0].length==1){
         $scope.uuid = $scope.temp.system_details['uuid'];
         $scope.sys_det_data.push($scope.temp.system_details);
         console.log($scope.sys_det_data)
        //  console.log($scope.sys_det_data);
        // console.log(response[0]);
       }
       else{
         $scope.sys_det_data = [];
         res = response[0];
         $scope.sys_det_data = _.chain(response[0]).map(function(d){
           return d['system_details']
         }).value();
         console.log($scope.sys_det_data)
        //  response[0].forEach(function(item){
        //   $scope.sys_det_data.push(item.sys_det_data);
        //   console.log($scope.sys_det_data)
        //   // console.log($scope.sys_det_data);
        //  });
        //  console.log($scope.sys_det_data);
       }
      // }

    });
  $scope.goToView=function(uuid){
    var data = _.filter(res, function(f){
      return f['system_details']['uuid'] == uuid;
    })

    var storage = window.localStorage;
    storage.setItem('data',JSON.stringify(data[0]));
    $state.go("view");
  };
  $scope.goToUpdate=function(){
    $state.go("update");
  };
  $scope.clientDetails=[
    // {
    //   "systemName":"DESKTOP-N0A2H3S",
    //   "uuid":"3CACEA81-5676-11E4-9F6E-68F7280FE6CF",
    //   "ip":"192.168.2.2"
    // },
    // {
    //   "systemName":"DESKTOP-N0A2H3S",
    //   "uuid":"4BDJSKEA81-5676-11E4-9F6E-6FFFS7280FE6CF",
    //   "ip":"192.168.2.1"
    // }
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

  $scope.data = JSON.parse(localStorage.getItem('data'));
  console.log($scope.data)

  $http.get("http://localhost:3012/getAll")
  $scope.sysDet=[
    {
    "uuid":"",
    "ip":"",
    "manufacturer":"",
    "version":"",
    "serialNumber":""
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
