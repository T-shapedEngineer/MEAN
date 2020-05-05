var express = require('express');
var router = express.Router();
var monk = require('monk');
var db = monk('localhost:27017/aditya');
var col = db.get('user');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/postuser', function(req,res){
  console.log(req.body);
  col.insert(req.body, function(err,docs){
  	console.log(docs);
    res.send(docs);
  });
});
module.exports = router;