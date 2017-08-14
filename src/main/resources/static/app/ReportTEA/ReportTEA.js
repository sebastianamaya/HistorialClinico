'use strict';

angular.module('myApp.ReportTEA', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ReportTEA', {
    templateUrl: 'ReportTEA/ReportTEA.html',
    controller: 'ReportTEACtrl'
  });
}])

.controller('ReportTEACtrl', ['$rootScope', '$scope', 'person', '$location', function ($rootScope, $scope, person,$location) {

    person.get({personId:""+$rootScope.patientId})
                .$promise.then(
                        //success
                        function( value ){
                            $scope.person=value;
                        },
                        //error
                        function( error ){
                            alert("El paciente no se encuentra registrado");
                        }
                );
    $scope.continueUP2=function(){
        $location.path("UpdatePerson");
    };

}]);
