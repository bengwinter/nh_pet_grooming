'use strict';

angular
  .module('nhPet')
    .controller('HomeCtrl', function ($scope, $rootScope, TextLookupService, DataService) {

      var initializePage = function() {
        $scope.gallery = {};

        $scope.offeringSelected = "All dog grooming includes a pedicure, ear plucking and cleaning, and a soothing bath using the “Hydrosurge” bathing system. Our shampoos are all natural and we offer several options at no extra charge- Hair is cut and styled in accordance with the owner’s vision, giving consideration to the dog’s lifestyle, temperament, and the frequency of grooming. A severely matted dog will most often be cut short. We will NEVER hurt an animal to save the coat."; 

        $scope.offerings = [
          {"title": "FOR DOGS", "text": "All dog grooming includes a pedicure, ear plucking and cleaning, and a soothing bath using the “Hydrosurge” bathing system. Our shampoos are all natural and we offer several options at no extra charge- Hair is cut and styled in accordance with the owner’s vision, giving consideration to the dog’s lifestyle, temperament, and the frequency of grooming. A severely matted dog will most often be cut short. We will NEVER hurt an animal to save the coat.", "selected": true, "position": 0},
          {"title": "FOR CATS", "text": "Newton Highlands Grooming has become the premier cat grooming salon in the Boston area. Many of the local veterinary hospitals, including veterinarians at Angell Animal Medical Center, refer their feline clients to us for their grooming needs. We offer everything including brushouts, partial shaves (of matted fur),  and of course, the adorable and most practical “Lion” cut- All cat grooming includes nail clipping, ear cleaning, and a sanitary shave.", "selected": false, "position": 1}, 
          {"title": "FOR ALL", "text": "We offer nail clipping for cats, dogs, rabbits, and other furry creatures on a walk-in basis.", "selected": false, "position": 2}
        ];

        $scope.galleryImages = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

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

      $scope.changeOfferingText = function(position) {
        //reset selected button
        for (i = 0; i < $scope.offerings.length; i++) { 
          $scope.offerings[i]["selected"] =  false;
        }
        //select button
        $scope.offerings[position]["selected"] = true;
        $scope.offeringSelected = $scope.offerings[position]["text"];

      };

      $scope.sendContactForm = function() {
        $scope.$broadcast('show-errors-check-validity');

        if ($scope.form.contact.$valid) {
          // debugger;
          //contact form code here SAM GRONDAHL
          var contactEmail = $scope.form.contact.email.$viewValue;
          var contactName = $scope.form.contact.name.$viewValue;
          var contactMessage = $scope.form.contact.message.$viewValue;
      
          var origin = location.origin;

          var data = {email: contactEmail, 
          name: contactName, 
          message: contactMessage, 
          origin: origin};

          var message = {
            to: 'info@julycamp.com',
            from: contactEmail,
            data : data
           };

         $.post('/contact/send', message, function(res) { })
           .error(function(xhr) { 
            $scope.submitMessage = "There was an error sending your message. Please try again."
            $scope.submitMessageFailure = true;
           });

          $scope.$broadcast('show-errors-reset');
          $scope.contact = { name: '', email: '', message: '', telephone: '', reason: '' };
          $scope.submitMessage = "Thank you for contacting us. Someone will be in touch within the next 5-7 business days."
          $scope.submitMessageSuccess = true;

      
        }
      };

      
    });
