"use strict";

var Task = function(description, category) {				// Ctor
	// privates
	var id = ++Task.highestId;
	var description = description;
	var category = category;
	var status = Task.enumStatus.PLANNED;
	var startDate = new Date();
	var finishDate = null;	
};

// Statics 
Task.highestId = 0;
Task.enumStatus = { PLANNED: 0, IN_PROGRESS: 1, DONE: 2};

// Getters. Defining methods in constructor would result in each object having
// own copy of function instead of shared one. prototype fields can be overriden
Task.prototype.getId = function() { return id; };
Task.prototype.getDescription = function() { return description; }; 
Task.prototype.getCategory = function() { return category; };
Task.prototype.getStatus = function() { return status; };
Task.prototype.getStartDate = function() { return startDate; };
Task.prototype.finishDate = function() { return finishDate; };

// Setters
Task.prototype.setDescription = function (desc) { description = desc; };
Task.prototype.setCategory = function(cat) { category = cat; };
Task.prototype.setStatus = function(status) {
	if( status == Task.enumStatus.DONE) {
		finishDate = new Date();
	} else {
		finishDate = null;
	}
	
	this.status = status;
} ;
