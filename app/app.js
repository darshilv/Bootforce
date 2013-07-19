var app = angular.module('bootforceApp',[]);

app.config(function ($routeProvider) {
    console.log("Route Providers init");
    $routeProvider
        .when('/groups',
            {
                controller: 'GroupsController',
                //templateUrl: '/app/partials/customers.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/groups/:groupID',
            {
                controller: 'GroupsController',
                //templateUrl: '/app/partials/customerOrders.html'
            })
        .when('/home',
            {
                controller :'ScheduleController', 
                templateUrl : './app/templates/myschedule.html'
            })
        .when('/my_schedule',
          {
                controller : 'ScheduleController',
                templateUrl : './app/templates/myschedule.html'
          })
        .when('/time_preference', 
          { 
                controller: 'TimePrefController', 
                templateUrl:'./app/templates/time_preference.html' 
          })
        .when('/rto', 
          { 
                controller: 'RTOController', 
                templateUrl:'./app/templates/rto.html' 
          })
        .when('/shift_board', 
          { 
                controller: 'ShiftBoardController', 
                templateUrl:'./app/templates/shift_board.html' 
          })
        .when('/staff_list', 
          { 
                controller: 'StaffListController', 
                templateUrl:'./app/templates/staff_list.html' 
          })
        .when('/noticeboard', 
          { 
                controller: 'NoticeBoardController', 
                templateUrl:'./app/templates/noticeboard.html' 
          })

        //Define a route that has a route parameter in it (:customerID)
        .otherwise({ redirectTo: '/home' });
    console.log($routeProvider);
});




