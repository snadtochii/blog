const express = require('express');
const router = express.Router();

const User = require('./user.model');

/* POST authenticate */
router.post('/admin/auth', async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  let user;
  try {
    user = await User.getUserByUsername(username);
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
