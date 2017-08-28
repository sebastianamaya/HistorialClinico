'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.RegistersInvestigatorViewProgramaIndividual',
  'myApp.RegisterDoctorViewProgramaIndividual',
  'myApp.ControlRegisterProgramaIndividual',
  'myApp.templateDoctor',
  'myApp.UpdatePerson',
  'myApp.PatientProfile',
  'myApp.DoctorProfile',
  'myApp.InvestigatorProfile',
  'myApp.templateInvestigator',
  'myApp.Login',
  'myApp.Register',
  'myApp.HomeInvestigator',
  'myApp.RegisterPatientObjetivo',
  'myApp.RegisterPatient',
  'myApp.HomeDoctor',
  'myApp.version',
  'myApp.UpdateDoctor',
  'myApp.Report',
  'myApp.Inicio',
  'myApp.RegisterPuntuacionCuatrimestral',
  'myApp.RegisterDoctorViewInformeCuatrimestral',
  'myApp.RegisterCurriculum',
  'myApp.InformeDiagnostico',
  'services.factory',
  'myApp.UpdatePersonInforme',
  'chart.js'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/Login'});
}]);

