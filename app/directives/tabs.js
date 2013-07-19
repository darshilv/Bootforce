app.directive('tabs', [function ($location) {
	return {
		restrict: 'EAC',
		controller: "TabController",
		templateUrl : "app/partials/_tabs.html",
		link: function (scope, iElement, iAttrs) {
			console.log(iAttrs);
		}

	};
}])