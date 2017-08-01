'use strict';

angular.module('myApp.Register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Register', {
    templateUrl: 'Register/Register.html',
    controller: 'RegisterCtrl'
  });
}])

.controller('RegisterCtrl', ['person', 'newPerson', '$rootScope', '$scope', 'persons','$http','$resource', '$location', function (person, newPerson, $rootScope, $scope, persons, $http, $resource, $location) {
        $scope.id=null;
        $scope.name=null;
        $scope.password=null;
        $rootScope.nameP=null;
        $scope.role=null;
        $scope.save= function(){
            $rootScope.idPerson=$scope.id;
            $rootScope.person={"id":$scope.id,"name":$scope.name,"password":$scope.password,"role":$scope.role};
            newPerson.save($rootScope.person,function(){
                console.info("Person saved   "+ $rootScope.person.name);
                $rootScope.idPerson=$rootScope.person.id;
                $rootScope.authenticated = true;
                person.get({personId:""+$rootScope.idPerson})
                .$promise.then(
                        //success
                        function( value ){
                        	alert("Registro Completado de "+ $rootScope.person.name);
                            $location.path("Login");
                        },
                        //error
                        function( error ){
                            alert("El Identificador no se encuentra registrado");
                        }
                );
            });

        };
	$scope.selectmenu=document.getElementById("roleS");
        $scope.selectmenu.onchange=function(){
            $scope.role = this.options[this.selectedIndex].text;
        }
}]);
