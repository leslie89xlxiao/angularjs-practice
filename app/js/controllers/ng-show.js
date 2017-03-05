var angularPractice = require('../../entries/app.js');

angularPractice.controller('ngShowCtrl', ['$scope', function($scope){
	$scope.is_show = false;

	$scope.toggleText = function(){
		$scope.is_show = !$scope.is_show;
	};
}]);