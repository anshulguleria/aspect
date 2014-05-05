(function () {

	//check existence
	if(window.Aspect) {
		//source function.
		window.wish = function () {
			console.log('Hello there.');
		};

		var prefixAspect = function () {
			console.log('caught function');
		};

		Aspect.applyPrefix(this, "wish", prefixAspect);

		wish();

	} else {
		console.error('Aspect not available');
	}

})();