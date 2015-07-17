"use strict";

(
	function() {
		var testTasks = [
			new Task("Doing stuff", "Various stuff"),
			new Task("Doing other stuff", "Various stuff"),
			new Task("Oh whatever", "Other stuff"),
			new Task("Blah blah", "Other stuff"),
			new Task("Job done!", "Other stuff")
		];
		
		testTasks[2].Status = Task.enumStatus.PLANNED;
		testTasks[3].Status = Task.enumStatus.IN_PROGRESS;
		testTasks[4].Status = Task.enumStatus.DONE;

		var app = angular.module('TaskList', []);
		app.controller('TaskController', function() {
			this.tasks = testTasks;
		});
		
		app.directive('task', function() {
			return {
				restrict: 'E',
				templateUrl: 'directives/taskView.html'
			};
		});
	}
)();

