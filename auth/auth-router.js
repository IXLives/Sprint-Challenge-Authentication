const router = require('express').Router();
const bcrypt = require('bcryptjs')
const secrets = require('../config/secrets')
const jwt = require('jsonwebtoken')

const Users = require('../users/users-model')

router.post('/register', (req, res) => {

  // implement registration

  //pull user info from req.body
  let user = req.body
  //hash user password
  const hash = bcrypt.hashSync(user.password, 10)
  //set the password to the newly created hash
  user.password = hash

  //add the user
  Users.add(user)
    .then(saved => {
      const token = generateToken(saved)
      res.status(201).json({message: `Created ${saved.username}. Generated token`, token})
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

router.post('/login', (req, res) => {
  // implement login
  let {username, password} = req.body

  Users.findBy({username})
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user)
        res.status(200).json({
          message: `Welcome ${user.username}`,
          token
        })
      } else {
        res.status(401).json({message: 'Invalid Credentials'})
      }
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

function generateToken(user) {

  const payload = {
    sub: user.id,
    username: user.username,
  }

  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router;
