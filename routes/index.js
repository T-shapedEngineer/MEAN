var express = require('express');
var router = express.Router();
var monk = require('monk');
var db = monk('localhost:27017/aditya');
var collection = db.get('users');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/postuser', function(req,res){
  console.log(req.body);
  collection.insert(req.body, function(err,docs){
    if(err){
    	console.log(err);
    }
    else{
    	console.log(docs);
    	res.send(docs);
    }
  });
});

module.exports = router;