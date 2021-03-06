var twrApp = angular.module('twrApp', ['ngRoute']);

twrApp.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'siteCtrl'
    	})
      .when('/home', {
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

twrApp.controller('siteCtrl', function($scope, $http){
  $http({method: 'GET', url: 'http://twrblog.herokuapp.com/posts.json'}).
  success(function(data, status, headers, config) {
    $scope.post = data;
  }).
  error(function(data, status, headers, config) {
    console.log("AJAX failed")
  });
})

twrApp.controller('homeCtrl', function($scope, $http, $timeout){
  $http({method: 'GET', url: 'http://twrblog.herokuapp.com/posts.json'}).
  success(function(data, status, headers, config) {
    $scope.post = data;
    console.log(data);
  }).
  error(function(data, status, headers, config) {
    console.log("AJAX failed")
  });
  // $http({method: 'GET', url: 'http://api.bandsintown.com/artists/the%20workday%20release/events.json?callback=?api_version=2.0&app_id=twr_site'}).
  // success(function(data, status, headers, config) {
  //   $scope.shows = data;
  //   console.log(data)
  // }).
  // error(function(data, status, headers, config) {
  //   console.log("AJAX failed")
  // });
  //This allows the twitter widget to reload when navigating back to home through ng-routes
  $timeout = twttr.widgets.load();
  
});
twrApp.controller('aboutCtrl', function($scope){});
twrApp.controller('contactCtrl', function($scope){});
twrApp.controller('mediaCtrl', function($scope){});
twrApp.controller('tourCtrl', function($scope){});