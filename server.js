var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/pug');

var port = process.env.PORT || 3000;

require('./utils/middleware.js')(app, express);
require('./utils/router.js')(app, express);

if(!module.parent){ 
  app.listen(port); 
}

console.log('Magic happens on port ' + port);

exports = module.exports = app;