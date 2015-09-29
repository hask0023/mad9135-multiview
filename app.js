var MultiListApp = angular.module('MultiListApp', ['ngRoute', 'LocalStorageModule'] );

//var MultiListApp = angular.module('MultiListApp', ['ngRoute', 'LocalStorageModule'] );

//CONTROLLERS SECTION





MultiListApp.controller('MainCtrl', function($scope, $route, $routeParams, $location) {
   });

MultiListApp.controller('ListOneCtrl',  function ($scope, localStorageService, $routeParams) {


    

    
    if (localStorageService.isSupported) {
      
        var storageInfoList1 = localStorageService.get('list1') || [];
        
        $scope.taskList = storageInfoList1;
      //  $scope.taskList = [{name:'Steal TARDIS'}, {name:'Gain Companion'}, {name:'Save Universe'}];
        $scope.localList = {};
    

        
    $scope.addTask = function() {
        if ($scope.taskName)
        {
                $scope.taskList.push({"name": $scope.taskName}); 
                $scope.taskName = "";
                localStorageService.set('list1', $scope.taskList);
        }

    }

    $scope.deleteTask = function(index) {
      //  $scope.tasklist.splice(index, 1);
        $scope.taskList.splice(index, 1);
        localStorageService.set('list1', $scope.taskList);
    }
    }
});
                        
MultiListApp.controller('ListTwoCtrl', function ($scope, localStorageService, $routeParams) {
    
     
    
    if (localStorageService.isSupported) {
      var storageInfoList2 = localStorageService.get('list2') || [];
     
         $scope.taskList = storageInfoList2;
      //  $scope.taskList = [{name:'Hula Hoop'}, {name:'Jump Rope'}, {name:'Deploy Cowcatcher'}];
        $scope.localList = {};
    

        
    $scope.addTask = function() {
        if ($scope.taskName)
        {
                $scope.taskList.push({"name": $scope.taskName}); 
                $scope.taskName = "";
                localStorageService.set('list2', $scope.taskList);
        }

    }

    $scope.deleteTask = function(index) {
      //  $scope.tasklist.splice(index, 1);
        $scope.taskList.splice(index, 1);
        localStorageService.set('list2', $scope.taskList);
    }
    }
    
});   

MultiListApp.controller('ListThreeCtrl', function ($scope, localStorageService, $routeParams) {
    
   
    
     if (localStorageService.isSupported) {
       var storageInfoList3 = localStorageService.get('list3') || [];
      
        $scope.taskList = storageInfoList3;
      //  $scope.taskList = [{name:'Sabre'}, {name:'Giraffe'}, {name:'Pheasant'}];
        $scope.localList = {};
    

        
    $scope.addTask = function() {
        if ($scope.taskName)
        {
                $scope.taskList.push({"name": $scope.taskName}); 
                $scope.taskName = "";
                localStorageService.set('list3', $scope.taskList);
        }

    }

    $scope.deleteTask = function(index) {
      //  $scope.tasklist.splice(index, 1);
        $scope.taskList.splice(index, 1);
        localStorageService.set('list3', $scope.taskList);
    }
    }
    
    
});  

        
        
// TABS SECTION
        
        
MultiListApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
    
    .when ('/', {
        templateUrl: 'list1.html',
        controller: 'ListOneCtrl'
    })
    .when('/list-two', {
        templateUrl: 'list2.html',
      //  template: '<p>Show list 2</p>',
        controller: 'ListTwoCtrl'
        
    })
    .when('/list-three', {
        templateUrl: 'list3.html',
        controller: 'ListThreeCtrl'
    });
    
    $routeProvider.otherwise({
        redirectTo: '/'
      });
    
});
    
    
