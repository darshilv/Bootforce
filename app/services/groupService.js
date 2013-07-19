//we need to convert $http to $resource for better API support but that can happen later
app.service('groupService', function ($http, $rootScope) {
	var groups;
    this.getGroups = function () {
        //$http returns a HTTP Promise
      return $http({ method: 'GET', url: 'http://localhost:3001/groups/all'});
    };

    this.insertGroup = function (firstName, lastName, city) {
        var topID = groups.length + 1;
        groups.push({
            
        });
    };

    this.deleteGroup = function (id) {
        for (var i = groups.length - 1; i >= 0; i--) {
            if (groups[i].id === id) {
                groups.splice(i, 1);
                break;
            }
        }
    };

    this.getGroup = function (id) {
        for (var i = 0; i < groups.length; i++) {
            if (groups[i].id === id) {
                return groups[i];
            }
        }
        return null;
    };
});