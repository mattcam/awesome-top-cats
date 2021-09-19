var express = require('express');
var router = express.Router();
var request = require("request");
var _ = require("underscore");

var options = { method: 'GET',
  url: 'https://api.thecatapi.com/v1/breeds',
  qs: { attach_breed: '0' },
  headers: { 'x-api-key': process.env.THECATAPI_KEY } };


router.get('/', function(req, res, next) {

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var cats = _.last(_.sortBy(_.map(JSON.parse(body), function(element, index) {
	    return _.extend({}, {score:(element.child_friendly+element.stranger_friendly+element.dog_friendly)}, element)
    }),'score'),5)

    console.log(cats);
    res.render('index', {cats:cats});
  });


});

module.exports = router;
