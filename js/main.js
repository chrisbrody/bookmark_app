var myApp = angular.module("myApp", ["firebase"]);

<<<<<<< HEAD
// CODIFY CONTORLLER
myApp.controller('blogCtrl', ['$scope', '$firebase',
  function($scope, $firebase) {
    var ref = new Firebase("https://bookmarkit.firebaseio.com/blog");
    $scope.messages = $firebase(ref).$asArray();

    //ADD MESSAGE METHOD
    $scope.addBlog = function(e) {

      //LISTEN FOR RETURN KEY
      if (e.keyCode === 13 && $scope.msg) {
        //ALLOW CUSTOM OR ANONYMOUS USER NAMES
        var name = $scope.name || 'anonymous';
        $scope.messages.$add({Description: name, URL: $scope.msg});
        //RESET MESSAGE
        $scope.name = "";
        $scope.msg = "";
      }
    }
  }
]);

// CODIFY CONTORLLER
myApp.controller('schoolCtrl', ['$scope', '$firebase',
=======
myApp.controller('MyController', ['$scope', '$firebase',
>>>>>>> 33cbd893106705201cb24a67e327beb939a99d57
  function($scope, $firebase) {
    var ref = new Firebase("https://bookmarkit.firebaseio.com/school");
    $scope.messages = $firebase(ref).$asArray();

    //ADD MESSAGE METHOD
<<<<<<< HEAD
    $scope.addCodify = function(e) {

      //LISTEN FOR RETURN KEY
      if (e.keyCode === 13 && $scope.msg) {
        //ALLOW CUSTOM OR ANONYMOUS USER NAMES
        var name = $scope.name || 'anonymous';
        $scope.messages.$add({Description: name, URL: $scope.msg});
        //RESET MESSAGE
        $scope.name = "";
        $scope.msg = "";
      }
    }
  }
]);

// DESIGN CONTROLLER
myApp.controller('designCtrl', ['$scope', '$firebase',
  function($scope, $firebase) {
    var ref = new Firebase("https://bookmarkit.firebaseio.com/design");
    $scope.messages = $firebase(ref).$asArray();

    //ADD MESSAGE METHOD
    $scope.addDesign = function(e) {

      //LISTEN FOR RETURN KEY
      if (e.keyCode === 13 && $scope.msg) {
        //ALLOW CUSTOM OR ANONYMOUS USER NAMES
        var name = $scope.name || 'anonymous';
        $scope.messages.$add({Description: name, URL: $scope.msg});
        //RESET MESSAGE
        $scope.name = "";
        $scope.msg = "";
      }
    }
  }
]);

// DEVELOPER CONTROLLER
myApp.controller('devCtrl', ['$scope', '$firebase',
  function($scope, $firebase) {
    var ref = new Firebase("https://bookmarkit.firebaseio.com/developer");
    $scope.messages = $firebase(ref).$asArray();

    //ADD MESSAGE METHOD
    $scope.addDeveloper = function(e) {
=======
    $scope.addMessage = function(e) {
>>>>>>> 33cbd893106705201cb24a67e327beb939a99d57

      //LISTEN FOR RETURN KEY
      if (e.keyCode === 13 && $scope.msg) {
        //ALLOW CUSTOM OR ANONYMOUS USER NAMES
        var name = $scope.name || 'anonymous';
        $scope.messages.$add({Description: name, URL: $scope.msg});
        //RESET MESSAGE
        $scope.name = "";
        $scope.msg = "";
      }
    }
  }
]);

$('.reveal').on('click', function() {
  $(this).next().toggleClass('hidden');
});
