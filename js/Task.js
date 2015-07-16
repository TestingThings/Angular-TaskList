"use strict";

var Task = function(description, category) {		// Ctor
	// privates by contract
	this.id = ++Task.highestId;
	this.description = description;
	this.category = category;
	this.status = Task.enumStatus.PLANNED;
	this.startDate = new Date();
	this.finishDate = null;	
};

// Statics 
Task.highestId = 0;
Task.enumStatus = { PLANNED: 0, IN_PROGRESS: 1, DONE: 2};

// Getters and setters
Task.prototype = {
	get Id() { return this.id; },
	get Description() { return this.description; },
	get Category() { return this.category; },
	get Status() {
		if(this.status == Task.enumStatus.PLANNED)
			return "Planned";
		else if (this.status == Task.enumStatus.IN_PROGRESS)
			return "In progress";
		else 
			return "Done";
	},
	
	get StartDate() { return this.startDate; },
	get FinishDate() {
		if(this.status == Task.enumStatus.DONE)
			return this.finishDate;
		else
			return "Not yet finished!";
	},
	
	set Description(desc) { this.description = desc; },
	set Category(cat) { this.category = cat; },
	set Status(status) {
		if( status == Task.enumStatus.DONE) {
			this.finishDate = new Date();
		} else {
			this.finishDate = null;
		}
		
		this.status = status;
	}
};
