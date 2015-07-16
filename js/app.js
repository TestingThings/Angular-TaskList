"use strict";

(
	function() {
		var testTask = new Task("Doing stuff", "Various stuff");
		
		var app = angular.module('TaskList', []);
		app.controller('TaskController', function() {
			this.task = testTask;
		});
	}
)();

