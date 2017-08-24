'use strict';

angular.module('services.factory', ['ngRoute', 'ngResource'])
.factory('person', function($resource){
	return $resource('/person/:personId',{id:"@_personId"},{get: { method: 'GET'}});
})
.factory('persons', function($resource) {
	return $resource('/person',{},{ 'get': { method: 'GET', isArray: true}, 'update': { method: 'PUT', isArray: false}});
})
.factory('newPerson', function($resource) {
	return $resource('/person/new');
})
.factory('deleteObjetivo', function($resource) {
	return $resource('/person/objetivo/:objetivo',{id:"@_objetivo"},{'update': { method: 'PUT', isArray: false}});
})
;
