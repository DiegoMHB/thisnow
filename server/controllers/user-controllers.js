const model = require('../db/models/usersModel');



exports.newUser = async (req, res) => {
  try {

    const user = req.body;
    const newUser = model.newUser(user);

    if (newUser) {
      res.status(201);
      return newUser
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
      res.status(200);
      res.send(users)
      return users
    } else {
      res.status(404).send('Couldnt get Users')
    }

  } catch (error) {
    res.status(500).send('Something happened:', error);
  }
}


exports.getUser = async (req, res) => {
  try {
    
    const id = req.params.id;
    const user = await model.getOneUser(id);

    if (user) {
      res.status(201);
      res.send(user);
      console.log('en controller  22222222222',user);
      return user;
    } else {
      res.status(404).send('Not found')
    }

  } catch (error) {
    res.status(500).send('Something happened:', error);
  }
}
