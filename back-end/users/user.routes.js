const express = require('express');
const router = express.Router();

const User = require('./user.model');

/* POST register */
router.post('/', async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    res.json({ success: false, msg: 'Please enter username and password' });
  }

  let userExist;
  try {
    userExist = await User.getUserByUsername(username);
    if (userExist) {
      res.json({ success: false, msg: 'This username is already exist' });
    }

    let user = new User({ username: username, password: password });
    try {
      let result = await User.addUser(user);
      if (!result) {
        res.json({ success: false, msg: 'User cannot be created' })
      }
      res.json({ success: true, msg: 'User created', data: result })
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }

});

/* POST authenticate */
router.post('/auth', async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  console.log(username);
  let user;
  try {
    user = await User.getUserByUsername(username);
    
    if (!user) {
      res.json({ success: false, msg: 'User not found' });
    }
    console.log(user);
    
    isPassMatch = User.comparePassword(user.password, password);
  } catch (err) {
    console.log(err);
  }

  if (isPassMatch) {
    res.json({ success: true, data: { user: { username: user.username } } });
  } else {
    res.json({ success: false, data: { msg: 'wrong username or password' } });
  }
});

module.exports = router;
