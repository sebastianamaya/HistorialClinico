'use strict';

angular.module('myApp.RegisterPatientObjetivo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/RegisterPatientObjetivo', {
    templateUrl: 'RegisterPatientObjetivo/RegisterPatientObjetivo.html',
    controller: 'RegisterPatientObjetivoCtrl'
  });
}])

.controller('RegisterPatientObjetivoCtrl', ['$rootScope', '$scope', 'persons','person', '$http','$resource', '$location', function ($rootScope, $scope, persons,person, $http, $resource, $location) {
		person.get({personId:""+$rootScope.patientId})
                        .$promise.then(
                                //success
                                function( value ){
                                    $scope.personaC=value;
                                    $scope.objetivosC=$scope.personaC.objetivosCurriculum;
                                    if (typeof $scope.objetivosC == "undefined"){
                                        $scope.commentsY=false;
                                        $scope.commentsTitle="No hay objetivos registrados";
                                    }
                                    if(typeof $scope.objetivosC != "undefined"){
                                        $scope.commentsY=true;
                                    }
                                },
                                //error
                                function( error ){
                                    alert("Identificador no se encuentra registrado");
                                }
                        );

		$scope.newObj=false;
		$scope.newObjetivo=function(){
		    $scope.newObj=true;
		}
		$scope.areas=[];
        $scope.subareas=[];
        $scope.objetivos=[];
        var liness;
        var liness2;
        var liness3;
        $scope.areaSelected={
          idarea:null,
          nombre:null
        };
        $scope.subareaSelected={
          idsubarea:null,
          nombre:null
        };
        $scope.objetivoSelected={
          idobjetivo:null,
          nombre:null
        };
         $http.get('/app/CurriculumAnthiros/Areas/areas.txt').success(function (data) {
             var fileToRead=data;
             liness = data.split('\n');
             for(var line = 0; line < liness.length; line++){
               var a={idarea:line+1,nombre:liness[line]}
               $scope.areas.push(a);

             }
         });

         $scope.areasel=false;
         $scope.areaSel=function(){
            $scope.areasel=true;
            $http.get('/app/CurriculumAnthiros/Subareas/subareas.txt').success(function (data) {
                 var fileToRead=data;
                 liness2 = data.split('\n');
                 for(var line = 0; line < liness2.length; line++){
                   var area=liness2[line].split(',');
                   var a={idarea:area[1],nombre:area[0]}
                   if(area[1]==$scope.areaSelected.idarea){
                        $scope.subareas.push(a);
                   }
                 }
         });
         };
         $scope.subareasel=false;
          $scope.subareaSel=function(){
             $scope.subareasel=true;
             $http.get('/app/CurriculumAnthiros/Objetivos/objetivos.txt').success(function (data) {
                  var fileToRead=data;
                  liness3 = data.split('\n');
                  for(var line = 0; line < liness3.length; line++){
                    var area=liness3[line].split(',');
                    var a={idarea:area[1],nombre:area[0]}
                    if(area[1]===$scope.subareaSelected.idarea){
                         $scope.objetivos.push(a);
                    }
                  }
          });
          };

        $scope.saveRegisterObjetivo= function(){
            $scope.nuevoObjetivo={"area":$scope.areaSelected.nombre
, "subarea":$scope.subareaSelected.nombre
, "nombreObjetivo":$scope.objetivoSelected.nombre
            };
            person.get({personId:""+$rootScope.patientId})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.personT=value;
                        $scope.personT.objetivosCurriculum.push($scope.nuevoObjetivo);
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

        $scope.deleteObjetivo=function(nombreObjetivo){
                      person.get({personId:""+$rootScope.patientId})
                      .$promise.then(
                              //success
                              function( value ){
                                  $scope.personT=value;
                                  $scope.objeti=$scope.personT.objetivosCurriculum;
                                   for(var l= 0; l< $scope.objeti.length; l++){
                                      var obj=$scope.objeti[l];
                                      if(obj==nombreObjetivo){
                                           $scope.objetivos.splice(l,1);
                                      }
                                    }
                                  person.update($scope.personT)
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
