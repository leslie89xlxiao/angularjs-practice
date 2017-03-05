var angularPractice = require('../../entries/app.js');

angularPractice.controller('ngClassCtrl', ['$scope', function($scope){
    $scope.isWarning = false;
    $scope.isError = false;

    $scope.showWarning = function(){
        $scope.isWarning = true;
        $scope.isError = false;
    };

    $scope.showError = function(){
        $scope.isError = true;
        $scope.isWarning = false;
    };

    $scope.reset = function(){
        $scope.isError = false;
        $scope.isWarning = false;
    };

}]);