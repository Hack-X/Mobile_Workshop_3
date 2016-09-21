angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ShowsCtrl', function($scope, Shows) {
  $scope.shows = [];
  Shows.all().then(function(apiShows) {
    $scope.shows = apiShows;
  });
})

.controller('ShowDetailCtrl', function($scope, $stateParams, $ionicModal, Shows) {
  $scope.show = Shows.get($stateParams.showId);

  $ionicModal.fromTemplateUrl('templates/modal-book.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.book = function(user_name, seats) {
    return Shows.book($stateParams.showId, user_name, seats)
    .then(function(booking) {
      console.log("Booking", booking);
      alert("Votre réservation a bien été prise en compte avec le numéro " + booking.id);
      $scope.closeModal();
    })
  }
})

.controller('MapCtrl', function($scope, $ionicLoading, Shows) {
  $scope.shows = [];
  Shows.all().then(function(apiShows) {
    $scope.shows = apiShows;
    $scope.addMarkers();
  });

  $scope.initializeMap = function() {
    console.log("here");
    var myLatlng = new google.maps.LatLng(48.8500, 2.35);

    var mapOptions = {
        center: myLatlng,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    console.log("google", google);

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    navigator.geolocation.getCurrentPosition(function(pos) {
        map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        var myLocation = new google.maps.Marker({
            position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
            map: map
        });
    });
    $scope.map = map;
    $scope.addMarkers();
  }

  $scope.addMarkers = function() {
    if($scope.shows.length == 0) return;
    $scope.shows.forEach(function(show) {
      var newMarker = new google.maps.Marker({
          position: new google.maps.LatLng(show.lat, show.lng),
          map: $scope.map,
          label: show.name
      });
    });
  }

  ionic.Platform.ready($scope.initializeMap);
});
