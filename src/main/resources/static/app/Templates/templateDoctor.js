'use strict';

angular.module('myApp.templateDoctor', ['ngRoute'])

.controller('templateDoctorCtrl', ['$rootScope', '$scope', 'person', '$location', function ($rootScope, $scope, person, $location) {
		
		$scope.continuePerfil=function(){
              $location.path("DoctorProfile");
         };
		
      $scope.continueLogoutD=function(){
            $rootScope.logout();
      };
      $scope.continueHomeD=function(){
            $location.path("HomeDoctor");
      };
      $scope.continueRegistersPProgramaIndividual=function(){
      		$location.path("RegisterDoctorViewProgramaIndividual");
      };
      $scope.continueRegisterPatient=function(){
      		$location.path("RegisterPatient");
      };
      
       $scope.continueRegisterobjetivos=function(){
      		$location.path("RegisterPatient");
      };
      
      $scope.continueRegisterPuntuacion=function(){
      		$location.path("ControlRegisterProgramaIndividual");
      };
      $scope.continuePatientProfile=function(){
      		$location.path("PatientProfile");
      };
      
      
        
}]);
