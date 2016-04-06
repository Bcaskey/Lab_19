var controllers = angular.module('myApp.controllers', []);
controllers.controller('ContactPageController', ['$scope', 'ContactFactory', function($scope, ContactFactory) {
    $scope.contacts = ContactFactory.getAllContacts();
}]);

controllers.controller('ContactDetailController', ['$scope', '$routeParams', 'ContactFactory' , function($scope, $routeParams, ContactFactory) {
    var name = $routeParams.name;
    
    $scope.singleContact = ContactFactory.singleContact(name);
    console.log(contact.name);
}]);



// $scope.getSingBlogs = function() {
//         var postId = $routeParams.id;
        
//         BlogEntry.get({id: postId}).$promise.then(function(data) {
//             $scope.blog = data;
//         })
//         // $scope.blog = BlogEntry[blog_id];
//     }
//     $scope.getSingBlogs(); //
//     $scope.rtrnBlogsPage = function() {
//         $location.path("/blogposts");
//       };