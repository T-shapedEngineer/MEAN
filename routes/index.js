var express = require('express');
var router = express.Router();
var monk = require('monk');
var db = monk('localhost:27017/aditya');
var collection = db.get('users');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/getuser', function(req,res){
  collection.find({}, function(err,docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs);
      res.send(docs);
    }
  });
});

router.post('/postuser', function(req,res){
  //console.log(req.body);
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

router.delete('/deleteuser:id', function(req,res){
  console.log(req.params.id);
  collection.remove({"_id":req.params.id}, function(err,docs){
    if(err){
      console.log(err);
    }
    else{
      //console.log(docs);
      res.send(docs);
    }
  });
});

module.exports = router;