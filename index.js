(function (root) {
	"use strict";

	//AMD
	if (typeof define !== 'undefined' && define.amd) {
		define(['class-extender', 'class-emit'], function(Class, Emit) {
			return Class.extend({}, [Emit]);
		});
	}

	//CommonJS
	else if (typeof module !== 'undefined' && module.exports) {
		var Class = require('class-extender');
		var Emit = require('class-emit');

		module.exports = Class.extend({}, [Emit]);
	}

	//Script tag
	else {
		root.ClassEvented = Class.extend({}, [Emit]);
	}

} (this));