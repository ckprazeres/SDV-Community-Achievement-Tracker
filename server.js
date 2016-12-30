var express = require('express'),
    app = express(),
    setupHandlebars  = require('./app/setupHandlebars.js')(app),
    setupPassport = require('./app/setupPassport'),
    flash = require('connect-flash'),
    appRouter = require('./app/routers/appRouter.js')(express),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    jsonParser = bodyParser.json();

var port = process.env.PORT || 8080;

app.use(cookieParser());
app.use(session({ secret: '4564f6s4fdsfdfd', resave: false, saveUninitialized: false }));

app.use(flash());
app.use(function(req, res, next) {
    res.locals.errorMessage = req.flash('error');
    next();
});

app.use(jsonParser);
app.use(bodyParser.urlencoded({
  extended: true
}));

setupPassport(app);

app.use('/', appRouter);

var project_controller = require('./controllers/project_controller');
var datapage_controller = require('./controllers/datapage_controller');
var forms_controller = require('./controllers/forms_controller');

app.use(express.static(__dirname + '/public'));

// app.set("view engine", "ejs");

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