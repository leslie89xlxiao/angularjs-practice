var angularPractice = angular.module('angularPractice', [
'ui.router']);

module.exports = angularPractice;

angularPractice.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/bind');
    $stateProvider
    	.state('bind', {
    		url: '/bind',
    		templateUrl: 'app/views/ng-bind.html'
    	})
    	.state('class', {
    		url: '/class',
    		templateUrl: 'app/views/ng-class.html'
    	})
    	.state('show', {
    		url: '/show',
    		templateUrl: 'app/views/ng-show.html'
    	})
});

require('../css/common.css');

require('../js/controllers/ng-bind.js');

require('../js/controllers/ng-class.js');
require('../css/ng-class.css');

require('../js/controllers/ng-show.js');