var express = require('express');
var router = express.Router();
var monk = require('monk');
var db = monk('localhost:27017/aditya');
var collection = db.get('users');
var signup = db.get('signup');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('login');
});

router.get('/home', function(req, res) {
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

router.put('/updateuser:id', function(req,res){
  console.log(req.params.id);
  console.log(req.body);
  collection.update({"_id":req.params.id},{$set:req.body}, function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs);
      res.send(docs);
    }
  })
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
//------------------------------login/signup-------------------------------
router.post('/postsignup', function(req,res){
  signup.insert(req.body, function(err,docs){
    if(err){
      console.log(err);
    }
    else{
      res.send(docs);
    }
  });
});

router.post('/postlogin', function(req,res){
  var email1 = req.body.email;
  var password1 = req.body.password;
  signup.findOne({"email":email1,"password":password1}, function(err,docs){
    if(docs){
      res.send(docs);
    }
    else{
      res.sendStatus(500);
    }
  });
});

router.get('/forgot', function(req,res){
  res.render('forgot');
});
module.exports = router;