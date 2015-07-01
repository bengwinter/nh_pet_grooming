'use strict';

angular
  .module('nhPet')
    .controller('ModalsCtrl', function ($scope, $modal, $modalInstance, modalText, modalImage, modalTitle) {
      $scope.title = modalTitle;
      $scope.text = modalText;  
      $scope.selectedPhoto = modalImage;

      debugger;

      $scope.closeModal = function () {
        $modalInstance.dismiss('cancel');
      };

      $scope.togglePhoto = function(direction) {
        // if(($scope.selectedMember.arrayPosition + direction) ===  4){
        //   $scope.selectedMember = $scope.text[0];
        // } else if(($scope.selectedMember.arrayPosition + direction) ===  -1){
        //   $scope.selectedMember = $scope.text[3];
        // } else {
        //   $scope.selectedMember = $scope.text[($scope.selectedMember.arrayPosition + direction)];  
        // }
      };


  });