angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ShowsCtrl', function($scope, Shows) {
  $scope.shows = [];
  Shows.all().then(function(apiShows) {
    $scope.shows = apiShows;
  });
})

.controller('ShowDetailCtrl', function($scope, $stateParams, Shows) {
  $scope.show = Shows.get($stateParams.showId);
});
