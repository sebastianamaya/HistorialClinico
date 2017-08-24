'use strict';

angular.module('myApp.RegisterPuntuacionCuatrimestral', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/RegisterPuntuacionCuatrimestral', {
    templateUrl: 'RegisterPuntuacionCuatrimestral/RegisterPuntuacionCuatrimestral.html',
    controller: 'RegisterPuntuacionCuatrimestralCtrl'
  });
}])

.controller('RegisterPuntuacionCuatrimestralCtrl', ['$rootScope', '$scope', 'persons','person','$http','$resource', '$location', function ($rootScope, $scope, persons,person, $http, $resource, $location) {

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

                    		$scope.fecha=new Date();
                    		$scope.puntuacion=null;

                            $scope.saveRegister= function(){


                                $scope.diagnostic={"puntuacion":$scope.puntuacion
                                                    , "fecha":$scope.fecha
                                };
                                person.get({personId:""+$rootScope.patientId})
                                .$promise.then(
                                        //success
                                        function( value ){
                                            $scope.personT=value;
                                            $scope.objetivosT=$scope.personT.objetivosCurriculum;
                                            for(var l = 0; l < $scope.objetivosT.length; l++){
                                               if($scope.objetivosT[l].nombreObjetivo==$scope.objetivoSelected.nombre){
                                                    $scope.objetivosT[l].puntuacionesCuatrimestrales.push($scope.diagnostic);
                                               }
                                             }
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
