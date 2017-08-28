'use strict';

angular.module('myApp.InvestigatorProfile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/InvestigatorProfile', {
    templateUrl: 'InvestigatorProfile/InvestigatorProfile.html',
    controller: 'InvestigatorProfileCtrl'
  });
}])

.controller('InvestigatorProfileCtrl', ['$rootScope', '$scope', 'person', '$location', function ($rootScope, $scope, person,$location) {

    person.get({personId:""+$rootScope.idPerson})
                .$promise.then(
                        //success
                        function( value ){
                            $scope.person=value;
                        },
                        //error
                        function( error ){
                            alert("El paciente no se encuentra registrado");
                        }
                );
    $scope.continueActualizar2=function(){
        $location.path("UpdateDoctor");
    };

}]);
