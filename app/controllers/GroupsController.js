app.controller('GroupsController', function ($scope, groupService) {
    $scope.data = {};
    $scope.data.message = "Hello World";
    init();

    function init() {
        
        var hPromise = groupService.getGroups(); //getgroups returns http-promise
        hPromise.then(function(response){
          console.log(response);
          $scope.data.groups = response.data;
        },function(reason){
          console.log('Failed ' + reason);
        });
        
    }

    /*$scope.insertCustomer = function () {
        var firstName = $scope.newCustomer.firstName;
        var lastName = $scope.newCustomer.lastName;
        var city = $scope.newCustomer.city;
        customersService.insertCustomer(firstName, lastName, city);
        $scope.newCustomer.firstName = '';
        $scope.newCustomer.lastName = '';
        $scope.newCustomer.city = '';
    };

    $scope.deleteCustomer = function (id) {
        customersService.deleteCustomer(id);
    };*/
});