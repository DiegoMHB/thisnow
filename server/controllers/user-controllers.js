const model = require('../db/models/usersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



exports.userLogin = async (req, res) => {
  try {
    const { password, username } = req.body;

    const user = await model.login(username, password);
    if (user instanceof model.userModel) {
      user.password = '';
      const token = jwt.sign(
        { id: user._id, username: user.username }, 
        process.env.JSON_TOKEN, 
        { expiresIn: '1h' });

      return res.status(200).send(user);
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

    if (newUser) {
      return res.status(201).send(newUser);
    }
  } catch (error) {
    if (error.message) {
      return res.status(400).send({ error: error.message });
    }
    res.status(500).send({ error: 'Something happened' });
  }
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

