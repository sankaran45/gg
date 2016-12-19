angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {
  $scope.versesList = [
    {id:"1" , value:'5'},
    {id:"2" , value:'10'},
    {id:"3" , value:'15'},
    {id:"4" , value:'20'}
  ];

  $scope.selectedItem = $scope.versesList[1];

  $http.get('/www/json/verse.json').then(function(data) {
    $scope.selectedItem = data.value;
  })

  $scope.settingsList = [
      { text: "Show Meaning", checked: true}
    ];
  // Form data for the login modal
  $scope.loginData = {};

  $scope.save = function() {
    $http.post('/www/json/verse.json', $scope.selectedItem).then(function(data) {
      $scope.msg = 'Data saved';
    });
    console.log('Data sent: '+ JSON.stringify($scope.selectedItem));
  };

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
