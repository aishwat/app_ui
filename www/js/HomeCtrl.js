angular.module('starter.controllers')
.controller('HomeCtrl', function($q, $scope, $rootScope, $state, $ionicLoading, Api, Tweets) {
	$scope.show = function() {
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in'
		});
	};
	$scope.hide = function() {
		$ionicLoading.hide();
	};


	var apiCall = function(word) {
		var callback = function(err, result) {
			if (err){
				alert(err);
				$scope.hide();
			}
			
			else {
				Tweets.set(result);
				console.log(result);
				setTimeout(function(){ $state.go('tweets');$scope.hide(); }, 1000);
				
			}
			
		}
		Api.get(word, callback);
	}

	$scope.startTracking = function() {
		var hash = document.getElementById("hash").value;
		$scope.show();
		apiCall(hash);
	}

})