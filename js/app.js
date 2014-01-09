var app = angular.module('myApp', []);
    
app.config(function ($routeProvider) {
	$routeProvider
		.when('/about', {
			templateUrl: 'partials/about.html'})
		.when('/facroi', {
			templateUrl: 'partials/facroi.html',
			controller: 'productsController'})
		.when('/booil', {
			templateUrl: 'partials/booil.html',
			controller: 'productsController'})
		.when('/esoil', {
			templateUrl: 'partials/esoil.html',
			controller: 'productsController'})
		.when('/editProducts', {
			templateUrl: 'partials/editProducts.html',
			controller: 'productsController'})
		.when('/home', {
			templateUrl: 'partials/home.html'})
		.otherwise({
			redirectTo: '/home'});
});

app.factory('myFactory', function($http) {
	return {
		getProducts: function(callback) {
			$http.get('data/products.json').success(callback);
		}
	}
});

app.controller('productsController', function($scope, myFactory) {
	myFactory.getProducts(function(data) {
		$scope.products = data;
	});
});