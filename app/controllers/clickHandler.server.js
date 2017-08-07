'use strict';
var Users = require('../models/users.js');
var Poll = require('../models/poll.js');




function ClickHandler () {
	
	this.addNewPoll = function (req, res) {
	
	
	var poll1 = new Poll({ name: req.body.pollname, options:req.body.op });

       poll1.save(function (err) {
            if (err) {  console.log('error');  throw err;}
           res.redirect('/');
           });
           
	};
	
	this.addPollOption = function (req, res) {

	 Poll.findOneAndUpdate({ '_id': req.body.id }, {$push: {'ans': req.body.data}})
			.exec(function (err, result) {
					if (err) { throw err; }

					    res.end();
				}
			);
           
	};
	
		this.addNewPoll = function (req, res) {
	
	
	var poll1 = new Poll({ name: req.body.pollname, options:req.body.op });

       poll1.save(function (err) {
            if (err) {  console.log('error');  throw err;}
           res.redirect('/');
           });
           
	};
	
	this.deletePoll = function (req, res) {
     
       
       		Poll.findOne({ '_id': req.params.id }).remove()
			.exec(function (err, result) {
				if (err) { throw err; }

		     	res.redirect('/');
			});

           
	};
	
	this.getPolls = function (req, res) {
		
		Poll.find()
			.exec(function (err, result) {
				if (err) { throw err; }

				res.json(result);
			});
	};
	
	this.getPoll = function (req, res) {
		
		Poll.findOne({ '_id': req.params.id })
			.exec(function (err, result) {
				if (err) { throw err; }

				res.render('poll.html', {data: result});
			});

			
	};
	
	this.getIndex = function (req, res) {
		Poll.find()
			.exec(function (err, result) {
				if (err) { throw err; }

				res.render('index.html', {data: result});
			});

			
	};

	this.getClicks = function (req, res) {
		
		Users
			.findOne({ 'github.id': req.user.github.id }, { '_id': false })
			.exec(function (err, result) {
				if (err) { throw err; }

				res.json(result.nbrClicks);
			});
	};

	this.addClick = function (req, res) {
		Users
			.findOneAndUpdate({ 'github.id': req.user.github.id }, { $inc: { 'nbrClicks.clicks': 1 } })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.nbrClicks);
				}
			);
	};

	this.resetClicks = function (req, res) {
		Users
			.findOneAndUpdate({ 'github.id': req.user.github.id }, { 'nbrClicks.clicks': 0 })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.nbrClicks);
				}
			);
	};

}

module.exports = ClickHandler;
