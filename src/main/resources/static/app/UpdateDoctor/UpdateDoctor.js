'use strict';

angular.module('myApp.UpdateDoctor', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/UpdateDoctor', {
    templateUrl: 'UpdateDoctor/UpdateDoctor.html',
    controller: 'UpdateDoctorCtrl'
  });
}])

.controller('UpdateDoctorCtrl', ['$rootScope', '$scope','person', 'persons','$http','$resource', '$location', function ($rootScope, $scope, person, persons, $http, $resource, $location) {

		 person.get({personId:""+$rootScope.idPerson})
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

		$scope.name=null;
		$scope.password=null;
		
        $rootScope.nameP=null;

        $scope.update= function(){
            person.get({personId:""+$rootScope.idPerson})
                    .$promise.then(
                            //success
                            function( value ){
                                $scope.person=value;
if($scope.name!=null&&$scope.name!=''){
	$scope.person.name=$scope.name;
}
if($scope.password!=null&&$scope.password!=''){
	$scope.person.password=$scope.password;
}

                                persons.update($scope.person)
                                .$promise.then(
                                    //success
                                    function(value){
                                        console.log("Registro Exitoso");
                                        alert("Registro Exitoso");
                                      //  $location.path("HomeDoctor");
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
