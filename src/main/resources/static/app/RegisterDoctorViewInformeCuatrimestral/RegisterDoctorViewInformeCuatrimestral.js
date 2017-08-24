'use strict';

angular.module('myApp.RegisterDoctorViewInformeCuatrimestral', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/RegisterDoctorViewInformeCuatrimestral', {
    templateUrl: 'RegisterDoctorViewInformeCuatrimestral/RegisterDoctorViewInformeCuatrimestral.html',
    controller: 'RegisterDoctorViewInformeCuatrimestralCtrl'
  });
}])

.controller('RegisterDoctorViewInformeCuatrimestralCtrl', ['$rootScope', '$scope', 'person', 'persons', function ($rootScope, $scope, person, persons) {
    
    $scope.diagnosticsNew=[];
    $scope.foundRD=$rootScope.FindID;
    $scope.year=null;
    $scope.filtrarlo= function(){
        for(var n=0; n<$scope.diagnosticsNew.length; n++){
            var diag=$scope.diagnosticsNew[n];
            var datee=new Date(diag[4]);
            var dyear=datee.toString().split(" ");
            var dy=dyear[3];
            if(!(dy==$scope.year)){
                $scope.diagnosticsNew.splice(n,1);
            }             
                
        }
    };
    
    person.get({personId:""+$rootScope.patientId})
    .$promise.then(
            //success
            function( value ){
                $scope.principal=value;
                $scope.objetivos=$scope.principal.objetivosCurriculum;
                $scope.objetivos.orderByDate("date", -1);
                for(var n=0; n<$scope.objetivos.length; n++){
                    var dato=[];
                    dato.push($scope.objetivos[n].area);
                    dato.push($scope.objetivos[n].subarea);
                    dato.push($scope.objetivos[n].nombreObjetivo);
                    var puntuaciones=$scope.objetivos[n].puntuacionesCuatrimestrales;
                    puntuaciones.orderByDate("fecha",-1);
                    if(puntuaciones.length%3==1){
                        dato.push(puntuaciones[puntuaciones.length-1].puntuacion);
                        dato.push(puntuaciones[puntuaciones.length-1].fecha);
                    }
                    else if(puntuaciones.length%3==2){
                        dato.push(puntuaciones[puntuaciones.length-2].puntuacion);
                        dato.push(puntuaciones[puntuaciones.length-2].fecha);
                        dato.push(puntuaciones[puntuaciones.length-1].puntuacion);
                        dato.push(puntuaciones[puntuaciones.length-1].fecha);
                    }else{
                        var c=puntuaciones.length/3;
                        console.info(c);
                        var ini=0;
                        for(var line = 0; line < c; line++){
                            dato.push(puntuaciones[ini].puntuacion);
                            dato.push(puntuaciones[ini].fecha);
                            dato.push(puntuaciones[ini+1].puntuacion);
                            dato.push(puntuaciones[ini+1].fecha);
                            dato.push(puntuaciones[ini+2].puntuacion);
                            dato.push(puntuaciones[ini+2].fecha);
                            ini=ini+3;
                        }
                    }


                    $scope.diagnosticsNew.push(dato);
                    
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
