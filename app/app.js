
angular.module('base.app', [
  'angular-gestures'
])


.config(['hammerDefaultOptsProvider','$logProvider', function (hammerDefaultOptsProvider, $logProvider) {
  hammerDefaultOptsProvider.set({
    recognizers: [
      [Hammer.Tap, {time: 250}],
      [Hammer.Pan],
      [Hammer.Pinch],
    ]
  });
  $logProvider.debugEnabled(true);
}])


.run(['$log', function ($log) {
  $log.debug('debug enabled');
}])

.controller('UIController', ['$log', function($log){
    var self = this;

    self.tap = function(event){
      $log.debug('tap',event);
    };

    self.pan = function(event){
      $log.debug('pan',event);
    };

    self.pinch = function(event){
      $log.debug('pan',event);
    };

    $log.debug('UIController instiantated', self);

  }])

;


