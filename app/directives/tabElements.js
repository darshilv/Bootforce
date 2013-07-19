app.directive('tabElements', [function ($location) {
	return {
		restrict: 'EAC',
		templateUrl : "app/partials/_tabElements.html",
		scope: {
			linkname: "@",
			linkurl: "@",
		},
		link: function (scope, iElement, iAttrs) {
			iElement.bind("click", function(ev){
				$(".active").removeClass("active");
				console.log(scope.$parent);
				$(".linkElements").eq(scope.$parent.$index).addClass("active");
				//$(ev.currentTarget).children(0).addClass("active");

			});

			if(scope.$parent.$first){
				//console.log(scope.$parent);
				$(".linkElements").eq(scope.$parent.$index).addClass("active");
			}
		}

	};
}])