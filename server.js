  var express = require("express");
  var bodyParser = require('body-parser');
  var methodOverride = require('method-override');
  var models = require("./models");
  var path = require('path');

  var PORT = process.env.PORT || 7000;

  var project_controller = require('./controllers/project_controller');
  var datapage_controller = require('./controllers/datapage_controller');
  var forms_controller = require('./controllers/forms_controller');

  var app = express();

  app.use(express.static(__dirname + '/public'));
  app.set("view engine", "ejs");

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(methodOverride('_method'));

  var sequelizeConnection = models.sequelize;

  sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

//syncing tabels
 .then(function(){

    return sequelizeConnection.sync({force:false})

  })

  app.use('/', project_controller);
  app.use('/state', datapage_controller);
  app.use('/userform', forms_controller);

  app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);
  });