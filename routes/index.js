/*var express = require('express');
var router = express.Router();

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('test1', { header: 'Express' , names:[[1,2,3],[4,5,6]]});
});

module.exports = router;*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('test1', { vill:{name:['Batman' , 'Daredevil' , 'Wolverine']}});
});
//Here test is the view name. And next to it the data is being passed.

module.exports = router;
