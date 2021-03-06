angular.module('starter.controllers', ['LocalStorageModule'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('SettingsCtrl' , function($scope, localStorageService) {
    $scope.verseOptions = [5 , 10, 15, 20];
    $scope.verses = JSON.stringify($scope.verseOptions);
    console.log($scope.verses);
    console.log($scope.verses[3]);
    console.log(JSON.parse($scope.verses));
    $scope.dd = JSON.parse($scope.verses);
    var d = $scope.verseOptions[1];
    console.log(d);

    $scope.config = {
        numVerses: localStorage.getItem('numVerses' , 23),
        selectedVerse:$scope.dd[2]
    };

    window.localStorage['myData'] = JSON.stringify($scope.config);

    console.log($scope.config.selectedVerse);

    $scope.save = function() {
     console.log($scope.config.numVerses);
     localStorage.setItem('numVerses', $scope.config.numVerses);
     localStorage.setItem('verseOption' , $scope.config.selectedVerse);
     console.log($scope.config.selectedVerse);
   };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
