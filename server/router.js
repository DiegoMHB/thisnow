const express = require('express');
const router = express.Router();
const users = require('./controllers/user-controllers');
// const posts = require('./controllers/post-controllers');

//USERS:

router.post('/register', users.newUser);
router.post('/login', users.userLogin);
router.get('/users', users.getAllUsers);

//POSTS:
// router.get('/posts', posts.getAllPosts);
// router.get('/user/:id/post/:id', posts.getAPost);
// router.post('/post', posts.newPost)



module.exports = router;