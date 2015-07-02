angular
  .module('nhPet')
    .directive('resize', function ($window) {
      return function (scope, element) {
        var w = angular.element($window);

        scope.getWindowDimensions = function () {  
          return { 'h': w.height(), 'w': w.width(), 's': w.scrollTop()};
        };

        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
          scope.setHeightWidthAndPadding = function (percentage, paddingTopPercentage, paddingBottomPercentage, mobilePaddingPercentage) {

            if(newValue.w > 768) {
              mobilePaddingPercentage = 1;
            }

            return {
              'height': (newValue.h * percentage) + 'px',
              'width': (newValue.w) + 'px',
              'padding-top': (newValue.h * percentage * paddingTopPercentage * mobilePaddingPercentage) + 'px',
              'padding-bottom': (newValue.h * percentage * paddingBottomPercentage * mobilePaddingPercentage) + 'px'
            };
          };

          scope.setHeightPercentage = function (percentage) {

            return {
              'height': (newValue.h * percentage) + 'px'
            };
          };


                
        }, true);
      
        w.bind('resize', function () {
          scope.$apply();
        });
      }
    });