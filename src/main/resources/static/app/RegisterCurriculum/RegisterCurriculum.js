'use strict';

angular.module('myApp.RegisterCurriculum', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/RegisterCurriculum', {
    templateUrl: 'RegisterCurriculum/RegisterCurriculum.html',
    controller: 'RegisterCurriculumCtrl'
  });
}])

.controller('RegisterCurriculumCtrl', ['$rootScope', '$scope', 'persons','person', 'saveAreaFile', '$http','$resource', '$location', function ($rootScope, $scope, persons,person, saveAreaFile, $http, $resource, $location) {

            $scope.areaNew=null;
		    $scope.checkboxModel = {
                   area : false,
                   subarea : false,
                   objetivo : false
                 };

          $scope.areas=[];
          $scope.subareas=[];
          var liness;
          var liness2;
          $scope.areaSelected={
            idarea:null,
            nombre:null
          };
          $scope.subareaSelected={
            idsubarea:null,
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
           $http.get('/app/CurriculumAnthiros/Subareas/subareas.txt').success(function (data) {
              var fileToRead=data;
              liness2 = data.split('\n');
              for(var line = 0; line < liness.length; line++){
                var a={idsubarea:line+1,nombre:liness[line]}
                $scope.subareas.push(a);

              }
          });

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
          $scope.saveArea=function(){
                saveAreaFile.update({area:""+$scope.areaNew},$scope.personH)
                 .$promise.then(
                     //success
                     function(value){
                         console.log("Patient update"+ $scope.personT.programaIndividual);

                     },
                     //error
                     function( error ){
                         console.log("El person no se pudo actualizar");
                     }

                 );
          }
         $http.get('/app/CurriculumAnthiros/Areas/areas.txt').success(function (data) {
             var fileToRead=data;
             liness = data.split('\n');
             for(var line = 0; line < liness.length; line++){
               var a={idarea:line+1,nombre:liness[line]}
               $scope.areas.push(a);

             }
         });


}]);
