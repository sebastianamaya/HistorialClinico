'use strict';

angular.module('myApp.Report', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Report', {
    templateUrl: 'Report/Report.html',
    controller: 'ReportCtrl'
  });
}])

.controller('ReportCtrl', ['person', 'newPerson', '$rootScope', '$scope', 'persons','$http','$resource', '$location', function (person, newPerson, $rootScope, $scope, persons, $http, $resource, $location) {
        
        $scope.informe1= function(){
            $location.path("InformeDiagnostico");
        };
        $scope.informe2= function(){
            console.info("informe2");
        };     
         

}]);