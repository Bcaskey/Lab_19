var controllers = angular.module('myApp.controllers', []);
controllers.controller('ContactPageController', ['$scope', function($scope) {
    $scope.contacts = [
        {
            name: 'Mickey',
            email: 'bigm@world.com',
            phone: '1 (800) BIG-EARS'
        },
        {
            name: 'Donald',
            email: 'beakman@disney.com',
            phone: '1 (800) QUA-CKER'
        },
        {
            name: 'gooFy',
            email: 'gauwersh@disney.com',
            phone: '1 (800) IFO-RGOT'
        },
        {
            name: 'Woody',
            email: 'thesheriff@disney.com',
            phone: '1 (800) BIG-STAR'
        }
    ]
}]);

controllers.controller('ContactDetailController', ['$scope', '$routeParams', function($scope, $routeParams) {
    var contactid = $routeParams.id;
    var contacts = [
        {
            name: 'Mickey',
            email: 'bigm@world.com',
            phone: '1 (800) BIG-EARS'
        },
        {
            name: 'Donald',
            email: 'beakman@disney.com',
            phone: '1 (800) QUA-CKER'
        },
        {
            name: 'gooFy',
            email: 'gauwersh@disney.com',
            phone: '1 (800) IFO-RGOT'
        },
        {
            name: 'Woody',
            email: 'thesheriff@disney.com',
            phone: '1 (800) BIG-STAR'
        }
    ];
    
    $scope.contact = contacts[contactid];
}]);