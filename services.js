var services = angular.module('myApp.services', []);
services.service('WordService', ['$http', function($http) {
    this.age = 23;
    
}]);