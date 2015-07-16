"use strict";

var Task = function(description, category) {		// Ctor
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

// Getters and setters
Task.prototype = {
	get Id() { return id; },
	get Description() { return description; },
	get Category() { return category; },
	get Status() { return status; },
	get StartDate() { return startDate; },
	get FinishDate() { return finishDate; },
	set Description(desc) { description = desc; },
	set Category(cat) { category = cat; },
	set Status(status) {
		if( status == Task.enumStatus.DONE) {
			finishDate = new Date();
		} else {
			finishDate = null;
		}
		
		this.status = status;
	}
};
