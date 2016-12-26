var express = require("express");
var router = express.Router();
var newsSchema = require('../modeles/Schema');
var modelObj = new newsSchema();

router.get("/view", isLoggedIn, function (request, response) {
	var cursor = newsSchema.find({}, function (err, newsModell) {
		console.log("Inside find");
		if (err) {
			response.send(err);
		}
		else {
			console.log("data view");
			response.send(newsModell);
		}
	});
});

/*localhost:8080/news*/
router.put("/", function (request, response) {
	console.log("Inside put");
	var req1 = request.body.status;
	var req2 = request.body.sources[0];
	var oldId = req2.id;
	console.log(req1);
	console.log("Our array data is ------------------------------------------->" + req2.id);
	response.send("Hello from express all" + oldId);
});

/*localhost:8080/news*/
router.delete("/delete", isLoggedIn, function (request, response) {
	console.log("Inside delete function");
	console.log(request.body);
	console.log("ID to delete" + request.body._id);
	console.log("title to delete : " + request.body.title);
	modelObj.remove({ _id: request.body._id}, function (err, msg) {
		if (err) {
			console.log("Error" + err);
			response.send(err);
		}
		else {
			console.log("in delete success");
			console.log(msg);
			response.send("deleted successfully");

		}
	});
});

router.put("/Update", function (request, response) {
	console.log("Inside update function");

	console.log("ID to update" + request.body._id);
	modelObj.remove({ _id: request.body._id }, function (err, msg) {
		if (err) {
			response.send(err);
		} else {
			console.log("in update success");
			console.log(msg);
			response.send("update successfully");
		}
	});
});



/*localhost:8080/news*/
router.post('/save', isLoggedIn, function (req, res) {
	console.log("Inside post Im here");
	var req4 = req.body;
	console.log(req4);
	var modelObj = new newsSchema();
	modelObj.author = req4.author;
	console.log(modelObj.author);
	modelObj.title = req4.title;
	modelObj.url = req4.url;
	modelObj.urlToImage = req4.urlToImage;
	modelObj.publishedAt = req4.publishedAt;
	console.log(modelObj.author);
	modelObj.save(function (err) {
		 if (err) {
			console.log('Error on save!');
		 } else {
			 res.send("News Saved successfully");
		 } 
	});
	
});
function isLoggedIn(req, res, next) {
	console.log("hello" + req.user.id + "++++++++");
	if (req.isAuthenticated()) {
		console.log("if of logged in ");
		return next();
	}
	else {
		console.log("else of logged in ");
		res.json('not authenticated');
	}
};
module.exports = router;
