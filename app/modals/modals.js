'use strict';

angular
  .module('nhPet')
    .controller('ModalsCtrl', function ($scope, $modal, $modalInstance, modalText, modalImage, modalPhotoGallery, $window, modalTitle) {
      $scope.photoGallery = modalPhotoGallery;

      if (modalTitle === "") {
        $scope.selectedPhotoPosition = modalImage;
        $scope.title = $scope.photoGallery[$scope.selectedPhotoPosition]["title"];
        $scope.selectedPhotoSrc = $scope.photoGallery[$scope.selectedPhotoPosition]["src"];
      } else {
        $scope.title = modalTitle;  
        $scope.text = modalText;  
      }
      
      $scope.photoMaxHeight = (angular.element($window).height() * .7) + 'px';
      $scope.photoPadding = ((angular.element($window).height() * .7) * .1) + 'px'; 

      $scope.closeModal = function () {
        $modalInstance.dismiss('cancel');
      };

      $scope.togglePhoto = function(direction) {
        if(($scope.selectedPhotoPosition + direction) === ($scope.photoGallery.length)){
          $scope.selectedPhotoPosition = 0;
        } else if(($scope.selectedPhotoPosition + direction) ===  -1){
          $scope.selectedPhotoPosition = ($scope.photoGallery.length - 1);
        } else {
          $scope.selectedPhotoPosition = ($scope.selectedPhotoPosition + direction);  
        }

        $scope.title = $scope.photoGallery[$scope.selectedPhotoPosition]["title"];
        $scope.selectedPhotoSrc = $scope.photoGallery[$scope.selectedPhotoPosition]["src"];
      };


  });