'use strict';

angular.module('myApp.RegisterDoctorViewProgramaIndividual', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/RegisterDoctorViewProgramaIndividual', {
    templateUrl: 'RegisterDoctorViewProgramaIndividual/RegisterDoctorViewProgramaIndividual.html',
    controller: 'RegisterDoctorViewProgramaIndividualCtrl'
  });
}])

.controller('RegisterDoctorViewProgramaIndividualCtrl', ['$rootScope', '$scope', 'person', 'persons', function ($rootScope, $scope, person, persons) {
    
    $scope.diagnosticsNew=[];
    $scope.foundRD=$rootScope.FindID;
    $scope.inicio=null;
    $scope.fin=null;
    $scope.fecha=new Date();
    $scope.puntuacion=null;


    $scope.filtrarlo= function(){
        for(var n=0; n<$scope.diagnosticsNew.length; n++){
            if(!($scope.diagnosticsNew[n].date>=$scope.inicio&&$scope.diagnosticsNew[n].date<=$scope.fin)){
                $scope.diagnosticsNew.splice(n,1);
            }             
                
        }
    };
    
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
                        $scope.saveRegister= function(){
                                 $scope.diagnostic={"puntuacion":$scope.puntuacion
                                                    , "fecha":$scope.fecha
                                };
                                person.get({personId:""+$rootScope.patientId})
                                .$promise.then(
                                         function( value ){
                                          $scope.personT=value;
                                          $scope.objetivosT=$scope.personT.objetivosCurriculum;
                                          console.info($scope.personT)
                                          console.info($scope.objetivosT)
                                             }
                                            
                                );

                            }
                $scope.principal=value;
                $scope.diagnostics=$scope.principal.programaIndividual;
                $scope.diagnostics.orderByDate("date", -1);
                for(var n=0; n<$scope.diagnostics.length; n++){
                    var dd=$scope.diagnostics[n];
                    $scope.diagnosticsNew.push(dd);			
                    
                }
            },



            //error
            function( error ){
                console.log("Error");
            }



    );
    

    Array.prototype.orderByDate=function(p,so){
      if(so!=-1&&so!=1)so=1;
      this.sort(function(a,b){
        var da=new Date(a[p]),db=new Date(b[p]);
        return(da-db)*so;
      })



    };

}]);
