angular.module('spyFall.controllers', [])

.controller('HomeCtrl', function ($scope) {
  // TODO: HomeCtrl
})

.controller('JuegoCtrl', function ($scope, $interval, $timeout, $ionicModal) {
  var interval = null;
  var defaultGameTime = 8 * 60 * 1000; // 8 minutes
  $scope.minimumPlayersAmount = 3;
  $scope.players = [];

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

  $interval(function () {
    $scope.stable = !$scope.stable;
  }, 500);

  $scope.agregar = function () {
    $scope.players.push({ name: '' });
  };

  for (var i = 1; i <= $scope.minimumPlayersAmount; i++) {
    $scope.agregar();
  }

  $scope.quitar = function (index) {
    if ($scope.players.length > $scope.minimumPlayersAmount) {
      $scope.players.splice(index, 1);
    }
  };

  $scope.comenzar = function (form) {
    $scope.submitted = true;

    if (form.$valid) {
      $scope.started = true;
      $scope.paused = undefined;
      $scope.time = defaultGameTime;
      $scope.spy = Math.floor(Math.random() * $scope.players.length);
      $scope.place = Math.floor(Math.random() * $scope.places.length);
      $scope.players.forEach(function (player) {
        player.viewed = false;
      });
    }
  };

  $scope.finalizar = function () {
    $timeout(function () {
      $scope.started = false;
    }, 300);
    $scope.openResult();
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

  $scope.ver = function (index) {
    $timeout(function () {
      $scope.players[index].viewed = true;
    }, 300);
    $scope.activePlayer = $scope.players[index];
    if (index === $scope.spy) {
      $scope.activePlayer.place = '???';
      $scope.activePlayer.spy = 'Tú eres el espía';
    } else {
      $scope.activePlayer.place = $scope.places[$scope.place];
      $scope.activePlayer.spy = '???';
    }
    $scope.openPlayerInfo();
  };

  $scope.playersNotViewed = function () {
    var playersNotViewed = $scope.players.filter(function (player) {
      return !player.viewed;
    });

    return playersNotViewed.length;
  };

  $ionicModal.fromTemplateUrl('result.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.resultModal = modal;
  });

  $scope.openResult = function () {
    $scope.resultModal.show();
  };

  $scope.closeResult = function () {
    $scope.resultModal.hide();
  };

  $ionicModal.fromTemplateUrl('player-info.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.playerInfoModal = modal;
  });

  $scope.openPlayerInfo = function () {
    $scope.playerInfoModal.show();
  };

  $scope.closePlayerInfo = function () {
    $scope.playerInfoModal.hide();
  };

  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function () {
    $scope.resultModal.remove();
    $scope.playerInfoModal.remove();
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
