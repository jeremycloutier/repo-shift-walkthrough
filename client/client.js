var app = angular.module('userApp', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http){
    $http.get('/user').then(function(results){
        console.log(results);
        $scope.users = results.data;
    });

    $scope.removeUser = function(user){
        $http.delete('/user/deleteUserById/'+ user._id).then(function(response){
            $scope.users = response.data;
        });
    };
    console.log(response.data);
}]);