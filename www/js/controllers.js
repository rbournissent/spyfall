angular.module('spyFall.controllers', [])

.controller('HomeCtrl', function ($scope) {
  // TODO: HomeCtrl
})

.controller('JuegoCtrl', function ($scope, $interval, $ionicModal) {
  var interval = null;
  var defaultGameTime = 10 * 1000; // 8 minutes
  $scope.players = [{
    name: 'Nombre del Jugador 1'
  }, {
    name: 'Nombre del Jugador 2'
  }, {
    name: 'Nombre del Jugador 3'
  }, {
    name: 'Nombre del Jugador 4'
  }];

  $scope.places = [
    'Avión',
    'Banco',
    'Barco Pirata',
    'Base Militar',
    'Carpa de Circo',
    'Casino',
    'Catedral',
    'Ejército de las Cruzadas',
    'Embajada',
    'Escuela',
    'Estación Espacial',
    'Estación Polar',
    'Estación de Policía',
    'Estación de Servicios',
    'Estudio de Películas',
    'Fiesta Corporativa',
    'Hospital',
    'Hotel',
    'Playa',
    'Restaurante',
    'Spa',
    'Submarino',
    'Supermercado',
    'Teatro de Broadway',
    'Transatlántico',
    'Tren de Pasajeros',
    'Universidad'
  ];

  $scope.agregar = function () {
    var playerNumber = $scope.players.length + 1;
    $scope.players.push({ name: 'Nombre del Jugador ' + playerNumber });
  };

  $scope.quitar = function (index) {
    $scope.players.splice(index, 1);
  };

  $scope.comenzar = function () {
    $scope.started = true;
    $scope.time = defaultGameTime;
    $scope.spy = Math.floor(Math.random() * $scope.players.length);
    $scope.place = Math.floor(Math.random() * $scope.places.length);
    $scope.reanudar();
  };

  $scope.finalizar = function () {
    $scope.started = false;
    $scope.openModal();
    $interval.cancel(interval);
  };

  $scope.pausar = function () {
    $scope.paused = true;
    $interval.cancel(interval);
  };

  $scope.reanudar = function () {
    $scope.paused = false;
    interval = $interval(function () {
      $scope.time -= 1000;
      if ($scope.time === 0) {
        $scope.pausar();
      }
    }, 1000);
  };

  $ionicModal.fromTemplateUrl('result.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function () {
    $scope.modal.show();
  };

  $scope.closeModal = function () {
    $scope.modal.hide();
  };

  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function () {
    $scope.modal.remove();
  });
})

.controller('InstruccionesCtrl', function ($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  // $scope.$on('$ionicView.enter', function(e) {
  // });

  // TODO: InstruccionesCtrl
})

.controller('AcercaDeCtrl', function ($scope) {
  // TODO: AcercaDeCtrl
});
