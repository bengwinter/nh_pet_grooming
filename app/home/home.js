'use strict';

angular
  .module('nhPet')
    .controller('HomeCtrl', function ($scope, $rootScope, TextLookupService, DataService) {

      var initializePage = function() {
        $scope.gallery = {};

        $scope.contactIcons = [
          {
            "name": "Email",
            "icon": "fa-envelope", 
            "href": "https://www.google.com"
        }, {
            "name": "Facebook",
            "icon": "fa-facebook", 
            "href": "https://www.google.com"
        }, {
            "name": "Yelp",
            "icon": "fa-yelp", 
            "href": "https://www.google.com"
        }, {
            "name": "Tumblr",
            "icon": "fa-tumblr", 
            "href": "https://www.google.com"
        }];  
      };
      
      initializePage();
      console.log($scope.contactIcons);
      
    });
