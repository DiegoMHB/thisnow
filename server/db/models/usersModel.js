const mongoose = require('../index.js');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profile_picture: { type: String, required: false },
  posts: Array
},
  { timestamps: true });

const userModel = mongoose.model('User', userSchema);

const login = async function (username, password) {
  try {
    const user = await userModel.findOne({ username });
    if (!user) {
      throw new Error('The username doesn´t exist')
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      return user
    } else {
      throw new Error('Wrong Password')
    }
  } catch (e) {
    console.log('Error in Model login', e.message)
    throw e
  }
}

const userWithId = async function (id) {
  try {
    const user = await userModel.findById(id );
    if (!user) {
      throw new Error('The username doesn´t exist')
    }
      return user
  } catch (e) {
    console.log('Error in Model login', e.message)
    throw e
  }
}

const newUser = async function (user) {
  try {
    const usernameInDB = await userModel.findOne({ username: user.username });
    if (usernameInDB instanceof userModel) {
      throw new Error('User name already in use')
    }
    const mailInDB = await userModel.findOne({ email: user.email });
    if (mailInDB instanceof userModel) {
      throw new Error('Email already in use')
    }

    const newUser = await userModel.create(user);
    return newUser
  } catch (e) {
    console.log('Error in newUser:', e.message);
    throw e
  }
}

const getAllUsers = async function () {
  const users = await userModel.find({});
  return users
}

const getUserById = async function (id) {
  const user = await userModel.findById(id);
  if (!user) {
    return null;
  }
  return user;
};

module.exports = { newUser, getAllUsers, login, getUserById, userWithId ,userModel }
