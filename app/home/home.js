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
        
        $scope.galleryImages = ["https://s3.amazonaws.com/nhpet/nh_pet_gallery_01.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_02.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_03.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_04.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_05.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_06.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_07.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_08.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_09.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_10.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_11.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_12.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_13.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_14.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_15.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_16.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_17.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_18.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_19.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_20.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_21.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_22.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_23.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_24.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_25.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_26.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_27.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_28.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_29.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_30.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_31.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_32.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_33.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_34.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_35.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_36.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_37.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_38.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_39.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_40.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_41.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_42.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_43.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_44.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_45.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_46.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_47.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_48.jpg", "https://s3.amazonaws.com/nhpet/nh_pet_gallery_49.jpg"];

        $scope.galleryImageWidth = 0;

        for (j = 0; j < $scope.galleryImages.length; j++) { 
          var targetImage = new Image();
          targetImage.src = $scope.galleryImages[j];
          $scope.galleryImageWidth += (targetImage.width * (2/3));
        };

        console.log($scope.galleryImageWidth);

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
