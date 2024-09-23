const express = require('express');
const router = express.Router();
const users = require('./controllers/user-controllers');
// const posts = require('./controllers/post-controllers');

//USERS:

router.post('/user', users.newUser)
router.get('/users', users.getAllUsers);
router.get('/user/:id', users.getUser);

//POSTS:
// router.get('/posts', posts.getAllPosts);
// router.get('/user/:id/post/:id', posts.getAPost);
// router.post('/post', posts.newPost)



module.exports = router;