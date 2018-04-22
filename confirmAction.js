// EXAMPLE uploadPostImage
// <game-play></game-play>

angular.module('confirmAction', []).directive('confirmAction', ['Notification', 'sendRequest', function (Notification, sendRequest) {
  return {
    restrict: 'A',
    transclude: true,
    link: (scope, el, attrs) => {

      var msg = attrs.confirmAction || "Are you sure?";
                    var clickAction = attrs.confirmedClick;
                    el.bind('click',function (event) {
                        if ( window.confirm(msg) ) {
                          console.log(clickAction);
                            scope.$eval(clickAction);
                        }
                    });
		}
  };
}]);
