'use strict';

angular.module('myApp.PatientProfile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/PatientProfile', {
    templateUrl: 'PatientProfile/PatientProfile.html',
    controller: 'PatientProfileCtrl'
  });
}])

.controller('PatientProfileCtrl', ['$rootScope', '$scope', 'person', '$location', function ($rootScope, $scope, person,$location) {

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
    $scope.continueUP=function(){
        $location.path("UpdatePerson");
    };

}]);
