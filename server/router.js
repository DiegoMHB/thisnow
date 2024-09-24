const express = require('express');
const router = express.Router();
const users = require('./controllers/user-controllers');
const posts = require('./controllers/post-controllers');

//USERS:

router.post('/register', users.newUser);
router.post('/login', users.userLogin);
router.get('/users', users.getAllUsers);
router.get('/user/:id', users.getUserById);

//POSTS:
router.get('/posts', posts.getAllPosts);
router.post('/newpost', posts.newPost)
// router.get('/user/:id/post/:id', posts.getAPost);



module.exports = router;