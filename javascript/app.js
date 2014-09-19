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

twrApp.controller('homeCtrl', function($scope, $http){
  $http({method: 'GET', url: 'http://twrblog.herokuapp.com/posts.json'}).
  success(function(data, status, headers, config) {
    $scope.post = data;
  }).
  error(function(data, status, headers, config) {
    console.log("AJAX failed")
  });
  $http({method: 'GET', url: 'http://api.bandsintown.com/artists/theworkdayrelease/events.json?api_version=2.0&app_id=twr_site'}).
  success(function(data, status, headers, config) {
    $scope.shows = data;
    console.log(data)
  }).
  error(function(data, status, headers, config) {
    console.log("AJAX failed")
  });
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
});
twrApp.controller('aboutCtrl', function($scope){});
twrApp.controller('contactCtrl', function($scope){});
twrApp.controller('mediaCtrl', function($scope){});
twrApp.controller('tourCtrl', function($scope){});