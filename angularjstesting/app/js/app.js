var testingAngularApp = angular.module('testingAngularApp', []);

testingAngularApp.controller('testingAngularController', function($rootScope, $scope){
    $scope.title = "Testing AngularJS Applications";

    $scope.destinations = [];
    $scope.newDestinantion = {
        city: undefined,
        country: undefined
    }

    $scope.addDestination = function(){
        $scope.destinations.push(
            {
                city: $scope.newDestinantion.city,
                country: $scope.newDestinantion.country
            }
        )
    }
})