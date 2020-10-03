import "../data/connection"
import mongoose from "mongoose"
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DND Sheet' });
});

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* GET home page. */
const Cat = mongoose.model('Cat', { name: String });
router.get('/test', function(req, res, next) {

  const kitty = new Cat({ name: 'Zildjian' });
  kitty.save().then(() => console.log('meow'));
  
  res.render('index', { title: 'Test' });
});


module.exports = router;
