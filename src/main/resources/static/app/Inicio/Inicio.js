'use strict';

angular.module('myApp.Inicio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Inicio', {
    templateUrl: 'Inicio/Inicio.html',
    controller: 'InicioCtrl'
  });
}])

.controller('InicioCtrl', ['$rootScope', '$scope', 'person','$location', function ($rootScope, $scope, person,$location) {
	person.get({personId:""+$rootScope.idPerson})
    .$promise.then(
            //success
            function( value ){
                $scope.personH=value;
            },
            //error
            function( error ){
                alert("El Identificador no se encuentra registrado");
            }
    );
    $rootScope.FindID=false;
    $rootScope.patientId=null;
    $scope.found=false;
    $scope.pId=null;
    $rootScope.patientId=$scope.pId;
    $scope.consultar=function(){
        $rootScope.patientId=$scope.pId;
        person.get({personId:""+$rootScope.patientId})
        .$promise.then(
                //success
                function( value ){
                    $rootScope.FindID=true;
                    $scope.principal=value;
                },
                //error
                function( error ){
                    alert("Identificador no se encuentra registrado");
                }
        );

    };
    $scope.NuevaConsulta=function(){
        $rootScope.FindID=false;
    };

    //$scope.CrearReporte=function(){
           //$rootScope.FindID=false;
         //  $location.path("Report");
       //};
}]);
