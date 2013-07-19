app.controller('NavController', function ($scope, $location, groupService) {
    $scope.links = [
                        {name: "My Schedule", url: "/my_schedule", imageURL: "/img/HourGlassUI/Navigation/"},
                        {name: "Time Preference", url: "/time_preference", imageURL: "/img/HourGlassUI/Navigation/"},
                        {name: "Request Time Off", url: "/rto", imageURL: "/img/HourGlassUI/Navigation/"},
                        {name: "Shift Board", url: "/shift_board", imageURL: "/img/HourGlassUI/Navigation/"},
                        {name: "Staff List", url: "/staff_list", imageURL: "/img/HourGlassUI/Navigation/"},
                        {name: "Notice Board", url: "/noticeboard", imageURL: "/img/HourGlassUI/Navigation/"},
                    ];

    $scope.isActive = function(path){
    	console.log(path);
		if ($location.path().substr(0, path.length) == path) {
	      return true;
	    } else {
	      return false;
	    }
    };
});