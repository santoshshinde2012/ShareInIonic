app.controller("ShareController", function($scope, $cordovaSocialSharing) {

    $scope.shareAnywhere = function() {
        $cordovaSocialSharing.share("My Demo Message", "My Demo Subject", "www/img/image1.jpeg", "http://santoshshinde2012.blogspot.com");
    }
    /*
    $scope.shareViaTwitter = function(message, image, link) {
        $cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function(result) {
            $cordovaSocialSharing.shareViaTwitter(message, image, link);
        }, function(error) {
            alert("Cannot share on Twitter");
        });
    }*/
	  $scope.shareViaTwitter = function(message, image, link) {
			  $cordovaSocialSharing
			    .shareViaTwitter(message, image, link)
			    .then(function(result) {
			      // Success!
			      alert("success : "+result);
			    }, function(err) {
			      // An error occurred. Show a message to the user
			      alert("Cannot share on Twitter");
			    });
	  }

	  $scope.shareViaWhatsApp = function(message, image, link) {
			  $cordovaSocialSharing
			    .shareViaWhatsApp(message, image, link)
			    .then(function(result) {
			    	alert(result);
			      // Success!
			    }, function(err) {
			      // An error occurred. Show a message to the user
			       alert("Cannot share on WhatsApp");
			    });
	  }
	  $scope.shareViaFacebook = function(message, image, link) {
			  $cordovaSocialSharing
			    .shareViaFacebook(message, image, link)
			    .then(function(result) {
			      // Success!
			    }, function(err) {
			      // An error occurred. Show a message to the user
			      alert("Cannot share on Facebook");
			    });
	  }
  // access multiple numbers in a string like: '0612345678,0687654321'
	  $scope.shareViaSMS = function(message, number) {
			  $cordovaSocialSharing
			    .shareViaSMS(message, number)
			    .then(function(result) {
			    	alert(result);
			      // Success!
			    }, function(err) {
			      // An error occurred. Show a message to the user
			    });
	  }
  // TO, CC, BCC must be an array, Files can be either null, string or array
	  $scope.shareViaEmail = function(message, subject, toArr, bccArr, file) {
			  $cordovaSocialSharing
			    .shareViaEmail(message, subject, toArr, bccArr, file)
			    .then(function(result) {
			      // Success!
			    }, function(err) {
			      // An error occurred. Show a message to the user
			    });
	  }
  	$scope.shareViaSocialType = function(socialType, message, image, link) {
		  $cordovaSocialSharing
		    .canShareVia(socialType, message, image, link)
		    .then(function(result) {
		      // Success!
		    }, function(err) {
		      // An error occurred. Show a message to the user
		    });
  	 }
});