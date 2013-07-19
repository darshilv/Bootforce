app.directive('tabElements', [function ($location) {
	return {
		restrict: 'EAC',
		templateUrl : "app/partials/_tabElements.html",
		scope: {
			linkname: "@",
			linkurl: "@"
		},
		link: function (scope, iElement, iAttrs) {
			iElement.bind("click", function(ev){
				$(".active").removeClass("active");
				$(ev.currentTarget).children(0).addClass("active");

			});

		}

	};
}])