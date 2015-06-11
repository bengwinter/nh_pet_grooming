'use strict';

angular
  .module('nhPet')
    .controller('HomeCtrl', function ($scope, $rootScope, TextLookupService, DataService) {

      var initializePage = function() {
        $scope.gallery = {};

        $scope.offeringSelected = "All dog grooming includes a pedicure, ear plucking and cleaning, and a soothing bath using the “Hydrosurge” bathing system. Our shampoos are all natural and we offer several options at no extra charge- Hair is cut and styled in accordance with the owner’s vision, giving consideration to the dog’s lifestyle, temperament, and the frequency of grooming. A severely matted dog will most often be cut short. We will NEVER hurt an animal to save the coat."; 

        $scope.offerings = {
          "dogs": "Newton Highlands Grooming has become the premier cat grooming salon in the Boston area. Many of the local veterinary hospitals, including veterinarians at Angell Animal Medical Center, refer their feline clients to us for their grooming needs. We offer everything including brushouts, partial shaves (of matted fur),  and of course, the adorable and most practical “Lion” cut- All cat grooming includes nail clipping, ear cleaning, and a sanitary shave.",
          "cats": "Newton Highlands Grooming has become the premier cat grooming salon in the Boston area. Many of the local veterinary hospitals, including veterinarians at Angell Animal Medical Center, refer their feline clients to us for their grooming needs. We offer everything including brushouts, partial shaves (of matted fur),  and of course, the adorable and most practical “Lion” cut- All cat grooming includes nail clipping, ear cleaning, and a sanitary shave.",
          "everyone": "We offer nail clipping for cats, dogs, rabbits, and other furry creatures on a walk-in basis."
        };

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
