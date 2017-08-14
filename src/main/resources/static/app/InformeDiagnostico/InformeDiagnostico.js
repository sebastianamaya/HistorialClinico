'use strict';

angular.module('myApp.InformeDiagnostico', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/InformeDiagnostico', {
    templateUrl: 'InformeDiagnostico/InformeDiagnostico.html',
    controller: 'InformeDiagnosticoCtrl'
  });
}])

.controller('InformeDiagnosticoCtrl', ['$rootScope', '$scope', 'person', '$location', function ($rootScope, $scope, person,$location) {

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
    $scope.continueUpdate=function(){
        $location.path("UpdatePersonInforme");
    };

}]);
