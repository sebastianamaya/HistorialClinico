'use strict';

angular.module('myApp.ControlRegisterProgramaIndividual', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ControlRegisterProgramaIndividual', {
    templateUrl: 'ControlRegisterProgramaIndividual/ControlRegisterProgramaIndividual.html',
    controller: 'ControlRegisterProgramaIndividualCtrl'
  });
}])

.controller('ControlRegisterProgramaIndividualCtrl', ['$rootScope', '$scope', 'persons','person','$http','$resource', '$location', function ($rootScope, $scope, persons,person, $http, $resource, $location) {
		$scope.date=null;
		$scope.area=null;
		$scope.subarea=null;
		$scope.nombreObjetivo=null;
		$scope.puntuacion=null;
		$scope.nombreTerapeuta=$rootScope.terapeuta;
                console.log($rootScope.patientId);
        $scope.saveRegister= function(){
            $scope.diagnostic={"date":$scope.date
, "area":$scope.area
, "subarea":$scope.subarea
, "nombreObjetivo":$scope.nombreObjetivo
, "puntuacion":$scope.puntuacion
, "nombreTerapeuta":$scope.nombreTerapeuta
            };
            person.get({personId:""+$rootScope.patientId})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.personT=value;
                        $scope.personT.programaIndividual.push($scope.diagnostic);
                        persons.update($scope.personT)
                        .$promise.then(
                            //success
                            function(value){
                                console.log("Patient update"+ $scope.personT.programaIndividual);
                                $location.path("HomeDoctor");
                            },
                            //error
                            function( error ){
                                console.log("El person no se pudo actualizar");
                            }

                        );
                    },
                    //error
                    function( error ){
                        alert("El Identificador no se encuentra registrado");
                    }
            );
        };
}]);
