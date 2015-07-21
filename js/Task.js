"use strict";

var Task = function(description, category) {		// Ctor
	// privates by contract
	this.id = ++Task.highestId;
	this.description = description || '';
	this.category = category || '';
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
		/*Cast from string if needed*/
		if(status == 'Planned')
			status = Task.enumStatus.PLANNED;
		else if(status == 'In progress')
			status = Task.enumStatus.IN_PROGRESS;
		else if(status == 'Done')
			status = Task.enumStatus.DONE;
			
		if( status == Task.enumStatus.DONE) {
			this.finishDate = new Date();
		} else {
			this.finishDate = null;
		}
		
		this.status = status;
	},
	
	nextStatus: function() {
		if(this.status == Task.enumStatus.PLANNED)
			this.Status = Task.enumStatus.IN_PROGRESS;
		else if (this.status == Task.enumStatus.IN_PROGRESS)
			this.Status = Task.enumStatus.DONE;
	},
	
	prevStatus: function() {
		if(this.status == Task.enumStatus.IN_PROGRESS)
			this.Status = Task.enumStatus.PLANNED;
		else if (this.status == Task.enumStatus.DONE)
			this.Status = Task.enumStatus.IN_PROGRESS;
	}
};
