'use strict';

angular
  .module('nhPet')
    .controller('HomeCtrl', function ($scope, $rootScope, $modal, TextLookupService, DataService) {

      var initializePage = function() {
        $scope.gallery = {};

        $scope.offeringSelected = "All dog grooming includes a pedicure, ear plucking and cleaning, and a soothing bath using the “Hydrosurge” bathing system. Our shampoos are all natural and we offer several options at no extra charge- Hair is cut and styled in accordance with the owner’s vision, giving consideration to the dog’s lifestyle, temperament, and the frequency of grooming. A severely matted dog will most often be cut short. We will NEVER hurt an animal to save the coat."; 

        $scope.offerings = [
          {"title": "FOR DOGS", "text": "All dog grooming includes a pedicure, ear plucking and cleaning, and a soothing bath using the “Hydrosurge” bathing system. Our shampoos are all natural and we offer several options at no extra charge- Hair is cut and styled in accordance with the owner’s vision, giving consideration to the dog’s lifestyle, temperament, and the frequency of grooming. A severely matted dog will most often be cut short. We will NEVER hurt an animal to save the coat.", "selected": true, "position": 0},
          {"title": "FOR CATS", "text": "Newton Highlands Grooming has become the premier cat grooming salon in the Boston area. Many of the local veterinary hospitals, including veterinarians at Angell Animal Medical Center, refer their feline clients to us for their grooming needs. We offer everything including brushouts, partial shaves (of matted fur),  and of course, the adorable and most practical “Lion” cut- All cat grooming includes nail clipping, ear cleaning, and a sanitary shave.", "selected": false, "position": 1}, 
          {"title": "FOR ALL", "text": "We offer nail clipping for cats, dogs, rabbits, and other furry creatures on a walk-in basis.", "selected": false, "position": 2}
        ];

        TextLookupService.getText('main.json').success(function(data) { 
          $scope.galleryImages = data["gallery"];
          $scope.legal = data["legal"];
        });
        
        

        //total width of images below plus the 5px margin on each side which is 490
        // $scope.originalGalleryImageWidth = 32597 + 490;
        
        // if (angular.element(window).width() <= 992) {
        //   $scope.galleryImageWidth = $scope.originalGalleryImageWidth * (1/2);
        // } else {
        //   $scope.galleryImageWidth = $scope.originalGalleryImageWidth * (2/3);
        // }

        // $scope.galleryImageWidth += 250;

        // 16789.5px


        //used to figure out full width of the images...only needs to be run if the images change and need to update value above
        // $scope.galleryImageWidthTrue = 0;
        // for (j = 0; j < $scope.galleryImages.length; j++) { 
        //   var targetImage = new Image();
        //   targetImage.src = $scope.galleryImages[j];
        //   $scope.galleryImageWidthTrue += (targetImage.width);
        // };

        // angular.element('.slidebox-content').width($scope.galleryImageWidth);

        $scope.contactIcons = [
          {
            "name": "Email",
            "icon": "fa-envelope", 
            "href": "mailto:Jane@newtonhighlandsgrooming.com",
            "target": "_top"
        }, {
            "name": "Facebook",
            "icon": "fa-facebook", 
            "href": "https://www.facebook.com/pages/Newton-Highlands-Grooming-and-Pet-Boutique/123827980989221",
            "target": "_blank"
        }, {
            "name": "Yelp",
            "icon": "fa-yelp", 
            "href": "http://www.yelp.com/biz/newton-highlands-grooming-and-pet-boutique-newton-highlands-2",
            "target": "_blank"
        }, {
            "name": "Tumblr",
            "icon": "fa-tumblr", 
            "href": "https://www.tumblr.com",
            "target": "_blank"
        }];  

      };
      
      $scope.changeOfferingText = function(position) {
        //reset selected button
        for (i = 0; i < $scope.offerings.length; i++) { 
          $scope.offerings[i]["selected"] =  false;
        }
        //select button
        $scope.offerings[position]["selected"] = true;
        $scope.offeringSelected = $scope.offerings[position]["text"];

      };

      $scope.openGalleryModal = function (selectedPhoto) {
        var galleryModal = $modal.open({
          templateUrl: 'modals/gallery-modal.html',
          controller: 'ModalsCtrl',
          windowClass: 'center-modal',
          size: 'lg', 
          resolve: {
            modalText: function () {
              return "";
            },
            modalImage: function() {
              return selectedPhoto["src"];
            },
            modalTitle: function () {
              return selectedPhoto["title"];
            }
          }
        });
      };

      $scope.openLegalModal = function(size, modalType) {
        var legalModal = $modal.open({
          templateUrl: 'modals/legal-modal.html',
          controller: 'ModalsCtrl',
          size: size,
          resolve: {
            modalText: function () {
              return $scope.legal[modalType]["bodyText"];
            },
            modalImage: function() {
              return "";
            }, 
            modalTitle: function () {
              return $scope.legal[modalType]["header"];
            }
          }
        });
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

      initializePage();

      
    });
