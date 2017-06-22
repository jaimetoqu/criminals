angular.module('InfamousCriminals', ['ui.router'])
	.config(MainRouter);

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider']
function MainRouter($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/')
	$stateProvider
		.state('list', {
			url: '/list',
			templateUrl: 'list.html'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'about.html'
		})
		.state('new', {
			url: '/new',
			templateUrl: 'new.html'
		})
}