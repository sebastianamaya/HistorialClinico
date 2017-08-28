'use strict';

angular.module('myApp.RegisterDoctorViewProgramaIndividual', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/RegisterDoctorViewProgramaIndividual', {
    templateUrl: 'RegisterDoctorViewProgramaIndividual/RegisterDoctorViewProgramaIndividual.html',
    controller: 'RegisterDoctorViewProgramaIndividualCtrl'
  });
}])

.controller('RegisterDoctorViewProgramaIndividualCtrl', ['$rootScope', '$scope', '$location','person', 'persons', function ($rootScope, $scope, $location, person, persons) {
    
    $scope.diagnosticsNew=[];
        $scope.foundRD=$rootScope.FindID;
        $scope.inicio=null;
        $scope.fin=null;
        $scope.limpiar=false;
        $scope.filtrarlo= function(){
            $scope.limpiar=true;
            for(var n=0; n<$scope.diagnosticsNew.length; n++){
                if(!($scope.diagnosticsNew[n].date>=$scope.inicio&&$scope.diagnosticsNew[n].date<=$scope.fin)){
                    $scope.diagnosticsNew.splice(n,1);
                }

            }
        };

        $scope.loadData=function(){
        $scope.limpiar=false;
        person.get({personId:""+$rootScope.patientId})
                .$promise.then(
                        //success
                        function( value ){
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
        }

        $scope.loadData();


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

                           		$scope.fecha=new Date();
                           		$scope.puntuacion=null;
                                   $scope.tipo=null;

                                   var datee=new Date($scope.fecha);
                                   var dyear=datee.toString().split(" ");
                                   var dy=dyear[1];
                                   if (dy=="April" || dy=="May" ){
                                       $scope.tipo=1;
                                   }else if(dy=="Aug" || dy=="September"){
                                       $scope.tipo=2;
                                   }else if (dy=="November" || dy=="December"){
                                       $scope.tipo=3;
                                   }


                                   $scope.saveRegister= function(){


                                       $scope.diagnostic={"puntuacion":$scope.puntuacion
                                                           , "fecha":$scope.fecha
                                                           , "tipo":$scope.tipo
                                       };
                                       person.get({personId:""+$rootScope.patientId})
                                       .$promise.then(
                                               //success
                                               function( value ){
                                                   $scope.personT=value;

                                                   $scope.objetivosT=$scope.personT.objetivosCurriculum;
                                                   for(var l = 0; l < $scope.objetivosT.length; l++){
                                                      if($scope.objetivosT[l].nombreObjetivo==$scope.objetivoSelected.nombre){
                                                           var res=false;
                                                           var punts =$scope.objetivosT[l].puntuacionesCuatrimestrales;
                                                           for(var i=0; i<punts.length;i++){
                                                               var dat=new Date(punts[i].fecha);
                                                               var dmonth=dat.toString().split(" ");
                                                               var dm=dmonth[1];
                                                               if (punts[i].tipo==$scope.tipo && dm==dy){
                                                                   alert("La puntuación de este cuatrimestra ya fue registrada");
                                                                   res=true;
                                                                   break;
                                                               }
                                                           }
                                                           if(res==false){
                                                               $scope.objetivosT[l].puntuacionesCuatrimestrales.push($scope.diagnostic);
                                                           }

                                                      }
                                                    }
                                                   persons.update($scope.personT)
                                                   .$promise.then(
                                                       //success
                                                       function(value){
                                                           console.log("Patient update"+ $scope.personT.programaIndividual);
                                                           alert("Registro existoso");
                                                       },
                                                       //error
                                                       function( error ){
                                                           console.log("El person no se pudo actualizar");
                                                       }

                                                   );
                                               },
                                               //error
                                               function( error ){
                                                   alert("El Identificador no se encuentra registrado");
                                               }
                                       );
                                   };
                       },
                       //error
                       function( error ){
                           alert("Identificador no se encuentra registrado");
                       }
               );
        Array.prototype.orderByDate=function(p,so){
          if(so!=-1&&so!=1)so=1;
          this.sort(function(a,b){
            var da=new Date(a[p]),db=new Date(b[p]);
            return(da-db)*so;
          })
        };
        $scope.selectmenu=document.getElementById("select");
        $scope.selectmenu.onchange=function(){
            $scope.puntuacion = this.options[this.selectedIndex].text;
        }

}]);
