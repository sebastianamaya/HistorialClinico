'use strict';

angular.module('myApp.RegisterPatient', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/RegisterPatient', {
    templateUrl: 'RegisterPatient/RegisterPatient.html',
    controller: 'RegisterPatientCtrl'
  });
}])

.controller('RegisterPatientCtrl', ['person', 'newPerson', '$rootScope', '$scope', 'persons','$http','$resource', '$location', function (person, newPerson, $rootScope, $scope, persons, $http, $resource, $location) {
        $scope.id=null;
        $scope.name=null;
$scope.lugarDeNacimiento=null;
$scope.fechaDeNacimiento=null;
$scope.numeroDocumento=null;
$scope.ciudad=null;
$scope.localidad=null;
$scope.barrio=null;
$scope.nombrePadre=null;
$scope.edadPadre=null;
$scope.ocupacionPadre=null;
$scope.telefonoPadre=null;
$scope.nombrMadre=null;
$scope.edadMadre=null;
$scope.ocupacionMadre=null;
$scope.telefonoMadre=null;
$scope.aseguradora=null;
$scope.vinculacion=null;
$scope.password=null;
$scope.role=null;
        $rootScope.nameP=null;
        $scope.save= function(){
            $rootScope.person={"id":$scope.id,"name":$scope.name
			, "lugarDeNacimiento":$scope.lugarDeNacimiento
			, "fechaDeNacimiento":$scope.fechaDeNacimiento
			, "numeroDocumento":$scope.numeroDocumento
			, "ciudad":$scope.ciudad
			, "localidad":$scope.localidad
			, "barrio":$scope.barrio
			, "nombrePadre":$scope.nombrePadre
			, "edadPadre":$scope.edadPadre
			, "ocupacionPadre":$scope.ocupacionPadre
			, "telefonoPadre":$scope.telefonoPadre
			, "nombrMadre":$scope.nombrMadre
			, "edadMadre":$scope.edadMadre
			, "ocupacionMadre":$scope.ocupacionMadre
			, "telefonoMadre":$scope.telefonoMadre
			, "aseguradora":$scope.aseguradora
			, "vinculacion":$scope.vinculacion
			, "password":$scope.password
			, "role":"Paciente"
			, "programaIndividual":[]
			};
            newPerson.save($rootScope.person,function(){
                console.info("Person saved   "+ $rootScope.person.name);
                $rootScope.authenticated = true;
                person.get({personId:""+$rootScope.idPerson})
                .$promise.then(
                        //success
                        function( value ){
                        	alert("Registro Completado de "+ $rootScope.person.name);
                            $location.path("HomeDoctor");
                        },
                        //error
                        function( error ){
                            alert("El Identificador no se encuentra registrado");
                        }
                );
            });
            };
		
}]);
