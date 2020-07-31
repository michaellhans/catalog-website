const router = require('express').Router()
const ErrorHandler = require(__basedir + '/routes/util/MongooseErrorHandler')
const passport = require('passport')
const User = require(__basedir + '/model/User')

router.post('/login', (req, res) => {
  const { username, password } = req.body
  const user = new User({
    username,
    password
  })
  req.login(user, (err) => {
    if(err) {
      console.log(err)
      res.status(401).send(ErrorHandler.getErrorMessage(err))
    }
    else passport.authenticate("local")(req, res, function() {
      res.status(200).send({
        status: 200,
        message: 'successfully logged in'
      })
    })
  })
})

router.post('/register', (req, res) => {
  const { username, password, email } = req.body
  User.register({username, email}, password, (err, newUser) => {
    if(err) {
      console.log(err)
      res.status(401).send({
        status: 401,
        message: err
      })
    }
    else {
      passport.authenticate('local') (req, res, function() {
        res.status(201).send({
          status: 201,
          message: 'Account created successfully',
          info: {
            username: newUser.username,
            email: newUser.email
          }
        })
      })
    }
  })
})

module.exports = router