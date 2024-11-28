const model = require('../db/models/usersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// eslint-disable-next-line no-undef
const jsonToken = process.env.JSON_TOKEN


exports.userLogin = async (req, res) => {
  try {
    const { password, username } = req.body;

    const user = await model.login(username, password);
    if (user instanceof model.userModel) {
      user.password = '';
      const token = jwt.sign(
        { id: user._id, username: user.username },
        jsonToken,
        { expiresIn: '1h' });

      return res
        .cookie('access_token', token, {
          httpOnly: true,
          secure: false,
          sameSite: 'strict',
        })
        .status(200)
        .send(user)
    }
  } catch (error) {
    if (error.message) {
      return res.status(400).send({ error: error.message });
    }
    res.status(500).send({ error: 'Something happened' });
  }
}

exports.userLoginAuto = async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(403);
  }
  try {
    const data = jwt.verify(token,jsonToken);
    const user = await model.userWithId(data.id);
    if (user instanceof model.userModel) {
      user.password = '';
      const token = jwt.sign(
        { id: user._id, username: user.username },
        jsonToken,
        { expiresIn: '1h' });

      return res
        .cookie('access_token', token, {
          httpOnly: true,
          secure: false,
          sameSite: 'strict',
        })
        .status(200)
        .send(user)
    }
  } catch (error) {
    if (error.message) {
      return res.status(400).send({ error: error.message });
    }
    res.status(500).send({ error: 'Something happened' });
  }
}


exports.newUser = async (req, res) => {
  try {
    const user = req.body;
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    const newUser = await model.newUser(user);

    if (newUser instanceof model.userModel) {
      newUser.password = '';
      const token = jwt.sign(
        { id: user._id, username: user.username },
        jsonToken,
        { expiresIn: '1h' });

      return res
        .cookie('access_token', token, {
          httpOnly: true,
          secure: false,
          sameSite: 'strict',
        })
        .status(200)
        .send(newUser)
    }
  } catch (error) {
    if (error.message) {
      return res.status(400).send({ error: error.message });
    }
    res.status(500).send({ error: 'Something happened' });
  }
}

exports.userLogout = async (req, res) => {
  return res
    .clearCookie('access_token', { httpOnly: true, secure: false, sameSite: 'strict' }) 
    .send({ message: 'Cookie deleted, session expired' });
}

exports.getAllUsers = async (req, res) => {
  try {
    const users = await model.getAllUsers();
    if (users) {
      res.status(200).send(users);
    } else {
      res.status(404).send('Couldnt get Users')
    }
  } catch (error) {
    res.status(500).send('Something happened:', error);
  }
}


exports.getUserById = async (req, res) => {
  try {
    const user = await model.getUserById(req.params.id);
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send('Couldn’t find the user');
    }
  } catch (error) {
    res.status(500).send('Something went wrong:', error);
  }
};

