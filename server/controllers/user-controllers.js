const model = require('../db/models/usersModel');


exports.userLogin = async (req, res) => {
  try {

    const { password, username } = req.body;
    const user = await model.login(username, password);
    if (typeof user !== 'string') {
      res.status(200).send(user);
      return user;
    } else {
      res.status(404).send(user)
    }
    
  } catch (error) {
    res.status(500).send('Something happened:', error);
  }
}


exports.newUser = async (req, res) => {
  try {
    
    const user = req.body;
    const newUser = model.newUser(user);

    if (newUser) {
      res.status(201).send(user);
    } else {
      res.status(400).send('Couldnt create user')
    }

  } catch (error) {
    res.status(500).send('Something happened:', error);
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
      console.log(user)
    } else {
      res.status(404).send('Couldn’t find the user');
    }
  } catch (error) {
    res.status(500).send('Something went wrong:', error);
  }
};

