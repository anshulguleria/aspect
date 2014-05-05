/**
 * Self executing function to keep the closure to avoid any pollution
 * in global scope.
 */
(function () {

	var Aspect = {};
	Aspect.applyPrefix = function (thisArg, srcFunc, targetFunction) {
		//todo: validate parameters.
		//thisArg can be null depending on 'useStrict;' mode, user window object then.
		//srcFunc should exist.
		//targetFunction should exist.
		
		var srcCopy = thisArg[srcFunc];
		thisArg[srcFunc] = function () {
			targetFunction.apply(thisArg, arguments);
			srcCopy.apply(thisArg, arguments);
		}
	};

	//declare global variable for use.
	window.Aspect = Aspect;

})();