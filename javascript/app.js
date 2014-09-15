var twrApp = angular.module('twrApp', ['ngRoute']);

twrApp.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
    	})
      .when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'aboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'contactCtrl'
    	})
      .when('/media', {
        templateUrl: 'partials/media.html',
        controller: 'mediaCtrl'
      })
      .when('/tour', {
        templateUrl: 'partials/tour.html',
        controller: 'tourCtrl'
      });
});

twrApp.controller('homeCtrl', function($scope){});
twrApp.controller('aboutCtrl', function($scope){});
twrApp.controller('contactCtrl', function($scope){});
twrApp.controller('mediaCtrl', function($scope){});
twrApp.controller('tourCtrl', function($scope){});