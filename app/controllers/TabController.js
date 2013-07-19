app.controller('TabController', ['$scope', function ($scope) {
	//user configurations that can be pulled from a service/factory
    
    $scope.staffLinks = [
                        {name: "My Schedule", url: "/my_schedule", imageURL: "/img/HourGlassUI/Navigation/"},
                        {name: "Time Preference", url: "/time_preference", imageURL: "/img/HourGlassUI/Navigation/"},
                        {name: "Request Time Off", url: "/rto", imageURL: "/img/HourGlassUI/Navigation/"},
                        {name: "Shift Board", url: "/shift_board", imageURL: "/img/HourGlassUI/Navigation/"},
                        {name: "Staff List", url: "/staff_list", imageURL: "/img/HourGlassUI/Navigation/"},
                        {name: "Notice Board", url: "/noticeboard", imageURL: "/img/HourGlassUI/Navigation/"},
                    ];
    $scope.managerLinks = [
                        {name: "Manager Schedule", url: "/my_schedule", imageURL: "/img/HourGlassUI/Navigation/"},
                        {name: "Time Preference", url: "/time_preference", imageURL: "/img/HourGlassUI/Navigation/"},
                        {name: "Request Time Off", url: "/rto", imageURL: "/img/HourGlassUI/Navigation/"},
                        {name: "Shift Board", url: "/shift_board", imageURL: "/img/HourGlassUI/Navigation/"},
                        {name: "Staff List", url: "/staff_list", imageURL: "/img/HourGlassUI/Navigation/"},
                        {name: "Notice Board", url: "/noticeboard", imageURL: "/img/HourGlassUI/Navigation/"},
                    ];

    $scope.userType = "manager";
}])