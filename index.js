(function (root) {
	"use strict";

	//AMD
	if (typeof define !== 'undefined' && define.amd) {
		define(['class-extend', 'class-emit'], function(Class, Emit) {
			return Class.extend({}, [Emit]);
		});
	}

	//CommonJS
	else if (typeof module !== 'undefined' && module.exports) {
		var Class = require('class-extend');
		var Emit = require('class-emit');

		module.exports = Class.extend({}, [Emit]);
	}

	//Script tag
	else {
		root.ClassEmit = Class.extend({}, [Emit]);
	}

} (this));