'use strict';

angular.module('myApp.ControlRegisterProgramaIndividual', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ControlRegisterProgramaIndividual', {
    templateUrl: 'ControlRegisterProgramaIndividual/ControlRegisterProgramaIndividual.html',
    controller: 'ControlRegisterProgramaIndividualCtrl'
  });
}])

.controller('ControlRegisterProgramaIndividualCtrl', ['$rootScope', '$scope', 'persons','person','$http','$resource', '$location', function ($rootScope, $scope, persons,person, $http, $resource, $location) {

		person.get({personId:""+$rootScope.patientId})
        .$promise.then(
                //success
                function( value ){
                    $scope.personaC=value;
                    $scope.objetivosC=$scope.personaC.objetivosCurriculum;
                    $scope.objetivos=[];
                    $scope.objetivoSelected={
                      nombre:null,
                      idobjetivo:null
                    };
                    for(var l = 0; l < $scope.objetivosC.length; l++){
                    console.info("for "+$scope.objetivosC[l].nombreObjetivo);
                       var obj={nombre:$scope.objetivosC[l].nombreObjetivo, idobjetivo:l};
                       $scope.objetivos.push(obj);
                     }

                    		$scope.date=null;
                    		$scope.area=null;
                    		$scope.subarea=null;
                    		$scope.puntuacion=null;
                    		$scope.nombreTerapeuta=$rootScope.terapeuta;

                            $scope.saveRegister= function(){

                                for(var l = 0; l < $scope.objetivosC.length; l++){
                                   if($scope.objetivosC[l].nombreObjetivo==$scope.objetivoSelected.nombre){
                                        $scope.area=$scope.objetivosC[l].area;
                                        $scope.subarea=$scope.objetivosC[l].subarea;
                                   }

                                 }
                        console.info("area  "+$scope.area+ " subarea "+$scope.subarea+" objetivo "+$scope.objetivoSelected.nombre);
                                $scope.diagnostic={"date":$scope.date
                                                    , "area":$scope.area
                                                    , "subarea":$scope.subarea
                                                    , "nombreObjetivo":$scope.objetivoSelected.nombre
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
                },
                //error
                function( error ){
                    alert("Identificador no se encuentra registrado");
                }
        );


}]);
