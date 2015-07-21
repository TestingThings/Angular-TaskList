"use strict";

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

(
	function() {

		var app = angular.module('TaskList', ['ngAnimate']);
		
		app.controller('TaskController', function($scope) {
			$scope.tasks = testTasks;
			$scope.filter = 'All';
		});

		
		app.directive('addtask', function() {

			var controller = ['$scope', function ($scope) {
				$scope.task = {};

				$scope.isDisabled = function() {
					return $scope.task.Description == '' || $scope.task.Category == '';
				};

				$scope.addMode = false;
				
				$scope.enterAddMode = function() {
					$scope.addMode = true;
					$scope.task = new Task();
				};
				
				$scope.leaveAddMode = function() {
					$scope.addMode = false;
				};
				
				$scope.confirmAdd = function() {
					$scope.addMode = false;
					$scope.tasks.push($scope.task);
				};
			}];

			return {
				restrict: 'E',
				templateUrl: 'directives/addTaskView.html',
				require: '^TaskController',
				controller: controller
			};
		});
		
		app.directive('tasks', function() {
			return {
				restrict: 'E',
				scope: {
					status: '@',
					tasks: '=tasks',
					filter: '=filter'
				},
				require: '^TaskController',
				templateUrl: 'directives/taskView.html'
			};
		});
		
		app.filter('unique', function() {
		   return function(collection, keyname) {
		      var output = [], 
		          keys = [];
		
		      angular.forEach(collection, function(item) {
		          var key = item[keyname];
		          if(keys.indexOf(key) === -1) {
		              keys.push(key);
		              output.push(item);
		          }
		      });
		
		      return output;
   			};
		});
	}
)();

