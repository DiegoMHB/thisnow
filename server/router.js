const express = require('express');
const router = express.Router();
const users = require('./controllers/user-controllers');
const posts = require('./controllers/post-controllers');

//USERS:
router.post('/register', users.newUser);
router.post('/login', users.userLogin);
router.get('/loginAuto', users.userLoginAuto);
router.get('/logout', users.userLogout);

//USERS DATA: 
router.get('/users', users.getAllUsers);
router.get('/user/:id', users.getUserById);

//POSTS:
router.get('/posts', posts.getAllPosts);
router.post('/newpost', posts.newPost);

module.exports = router;