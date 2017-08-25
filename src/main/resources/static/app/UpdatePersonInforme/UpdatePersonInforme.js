'use strict';

angular.module('myApp.UpdatePersonInforme', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/UpdatePersonInforme', {
    templateUrl: 'UpdatePersonInforme/UpdatePersonInforme.html',
    controller: 'UpdatePersonInformeCtrl'
  });
}])

.controller('UpdatePersonInformeCtrl', ['$rootScope', '$scope','person', 'persons','$http','$resource', '$location', function ($rootScope, $scope, person, persons, $http, $resource, $location) {

		 person.get({personId:""+$rootScope.patientId})
                            .$promise.then(
                                    //success
                                    function( value ){
                                        $scope.person=value;});
		$scope.back=function(){
		    person.get({personId:""+$rootScope.idPerson})
            .$promise.then(
                    //success
                    function( value ){
                            $location.path("HomeDoctor");
                    },
                    //error
                    function( error ){
                        alert("El Identificador no se encuentra registrado");
                    }
            );
		};
		$scope.historia=null;
        $scope.compromiso=null;
        $scope.criterios=null;
        $scope.resultados=null;
        $scope.psicologia=null;
        $scope.problemas=null;
        $scope.areas=null;
        $scope.habilidades=null;
        $scope.basicas=null;
        $scope.informacionG=null;
        $scope.evaluacion=null;
        $rootScope.nameP=null;

        $scope.update= function(){
            person.get({personId:""+$rootScope.patientId})
                    .$promise.then(
                            //success
                            function( value ){
                                $scope.personT=value;
if($scope.historia!=null&&$scope.historia!=''){
	$scope.personT.historiaDelProblema=$scope.historia;
}
if($scope.evaluacion!=null&&$scope.evaluacion!=''){
	$scope.personT.metodoDeEvaluacion=$scope.evaluacion;
}
if($scope.informacionG!=null&&$scope.informacionG!=''){
	$scope.personT.informacionGeneral=$scope.informacionG;
}
if($scope.habilidades!=null&&$scope.habilidades!=''){
	$scope.personT.habilidadesEspeciales=$scope.habilidades;
}
if($scope.areas!=null&&$scope.areas!=''){
	$scope.personT.areasDeEvaluacion=$scope.areas;
}
if($scope.problemas!=null&&$scope.problemas!=''){
	$scope.personT.problemasComportamentales=$scope.problemas;
}
if($scope.psicologia!=null&&$scope.psicologia!=''){
	$scope.personT.psicologia=$scope.psicologia;
}
if($scope.resultados!=null&&$scope.resultados!=''){
	$scope.personT.resultados=$scope.resultados;
}
if($scope.criterios!=null&&$scope.criterios!=''){
	$scope.personT.analisisDeCriteriosDiagnostico=$scope.criterios;
}
if($scope.compromiso!=null&&$scope.compromiso!=''){
	$scope.personT.compromiso=$scope.compromiso;
}
if($scope.basicas!=null&&$scope.basicas!=''){
	$scope.personT.actividadesBasicasGenerales=$scope.basicas;
}
                                persons.update($scope.personT)
                                .$promise.then(
                                    //success
                                    function(value){
                                        console.log("Registro Exitoso");
                                        alert("Registro Exitoso");
                                        $location.path("HomeDoctor");
                                    },
                                    //error
                                    function( error ){
                                        console.log("El paciente no se pudo actualizar");
                                        alert("No se puedo registrar");
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