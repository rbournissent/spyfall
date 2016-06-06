angular.module('spyFall', ['ionic', 'spyFall.controllers', 'spyFall.services'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      window.cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      window.StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    controller: 'HomeCtrl',
    templateUrl: 'templates/home.html'
  })
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state('tab.juego', {
    url: '/juego',
    views: {
      'tab-juego': {
        templateUrl: 'templates/tab-juego.html',
        controller: 'JuegoCtrl'
      }
    }
  })
  .state('tab.instrucciones', {
    url: '/instrucciones',
    views: {
      'tab-instrucciones': {
        templateUrl: 'templates/tab-instrucciones.html',
        controller: 'InstruccionesCtrl'
      }
    }
  })
  .state('tab.acerca-de', {
    url: '/acerca-de',
    views: {
      'tab-acerca-de': {
        templateUrl: 'templates/tab-acerca-de.html',
        controller: 'AcercaDeCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
});
