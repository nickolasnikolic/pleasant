var artApp = angular.module('artApp', ['ui.router', 'ngSanitize', 'angular.filter'])
  .config(['$stateProvider',
    function($stateProvider) {
      $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'HomeController',
        onEnter: function($state) {
          console.log('home');
        }
      })

      .state('photo', {
        url: '/photo',
        templateUrl: 'templates/photo.html',
        controller: 'PhotoController',
        onEnter: function($state) {
          console.log('photo');
        }
      })
      .state('painting', {
        url: '/painting',
        templateUrl: 'templates/painting.html',
        controller: 'PaintingController',
        onEnter: function($state) {
          console.log('painting');
        }
      })
      .state('prints', {
        url: '/prints',
        templateUrl: 'templates/prints.html',
        controller: 'PrintsController',
        onEnter: function($state) {
          console.log('prints');
        }
      })
      .state('drawing', {
        url: '/drawing',
        templateUrl: 'templates/drawing.html',
        controller: 'DrawingController',
        onEnter: function($state) {
          console.log('drawing');
        }
      })

      .state('contact', {
        url: '/contact',
        templateUrl: 'templates/contact.html',
        controller: 'ContactController',
        onEnter: function($state) {
          console.log('contact');
        }
      })
    }
  ]);
