require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const YAML = require('yamljs');
const User = require('./model/User');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

// set up
const app = express();
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
global.__basedir = __dirname; // set up a basedir variable that points to server dir for everyone to use

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: 'http://localhost:8080' }));
app.use(
  session({
    secret: 'abc',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// passport
passport.use(User.createStrategy());
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

// Routes
const songRoute = require(__basedir + '/routes/api/song');
const bookRoute = require(__basedir + '/routes/api/book');
const authRoute = require(__basedir + '/routes/api/auth');

const swaggerDocument = YAML.load(
  path.resolve(__dirname, 'documentation/swagger.yml')
);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('try to visit the other path');
});
app.use('/api/auth', authRoute);
app.use('/api/book', bookRoute);
app.use('/api/song', songRoute);

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 3000;

app.listen(port, function () {
  if (port === 3000)
    console.log(
      `Server started on port ${port}, open http://localhost:${port}`
    );
});
