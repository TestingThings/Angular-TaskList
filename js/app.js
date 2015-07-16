"use strict";

(
	function() {
		var testTasks = [
			new Task("Doing stuff", "Various stuff"),
			new Task("Doing other stuff", "Various stuff")
		];

		var app = angular.module('TaskList', []);
		app.controller('TaskController', function() {
			this.tasks = testTasks;
		});
	}
)();

