angular.module('starter.controllers')
.controller('TweetsCtrl', function($q, $scope, $rootScope, $state, $ionicLoading,Tweets) {
	console.log('in TweetsCtrl');
	console.log(Tweets.get());
	$scope.tweets=Tweets.get();
})