var app = angular.module('myApp', ['myApp.controllers', 'myApp.factories', 'myApp.services', 'ngRoute', 'ngResource']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactPageController'
    })
    .when('/contacts/:id', {
        templateUrl: 'views/edit_contacts.html',
        controller: 'ContactDetailController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);