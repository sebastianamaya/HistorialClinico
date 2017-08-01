'use strict';

angular.module('myApp.HomeInvestigator', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/HomeInvestigator', {
    templateUrl: 'HomeInvestigator/HomeInvestigator.html',
    controller: 'HomeInvestigatorCtrl'
  });
}])

.controller('HomeInvestigatorCtrl', ['person', '$rootScope', '$scope', function (person, $rootScope, $scope) {
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
}]);
