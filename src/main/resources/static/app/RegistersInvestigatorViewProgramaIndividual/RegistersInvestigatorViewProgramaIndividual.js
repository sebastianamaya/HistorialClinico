'use strict';

angular.module('myApp.RegistersInvestigatorViewProgramaIndividual', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/RegistersInvestigatorViewProgramaIndividual', {
    templateUrl: 'RegistersInvestigatorViewProgramaIndividual/RegistersInvestigatorViewProgramaIndividual.html',
    controller: 'RegistersInvestigatorViewProgramaIndividualCtrl'
  });
}])

.controller('RegistersInvestigatorViewProgramaIndividualCtrl', ['person', 'persons', '$rootScope', '$scope', function (person, persons, $rootScope, $scope) {
     persons.get()
        .$promise.then(
                //success
                function( value ){
                    $scope.personsList=value;
                    $scope.labels=[];
                    $scope.diagnostics=[];
                    $scope.series = ['Datos de Control del estudio ProgramaIndividual'];
                    $scope.principalAndDiagnostic=[];
                    for (var i = 0; i < $scope.personsList.length; i++) {
                        if($scope.personsList[i].programaIndividual.length >= 1){
                            $scope.personAct=$scope.personsList[i];
                            $scope.labels.push($scope.personAct.id);
                            for(var n=0; n<$scope.personAct.programaIndividual.length; n++){
                                var dd=$scope.personAct.programaIndividual[n];
$scope.principalAndDiagnostic.push([$scope.personAct.id, $scope.personAct.name
, dd.area
, dd.subarea
, dd.nombreObjetivo
, dd.puntuacion
, dd.date
, dd.nombreTerapeuta
]);
                            }
                            
                            $scope.diagnostics.push($scope.personsList[i].programaIndividual[0]);
                        }
                    }
                    $scope.todoData=[];
					$scope.todoLabels=[
                    ];
                },
                //error
                function( error ){
                    alert("El paciente no se encuentra registrado");
                }
        );
}]);
