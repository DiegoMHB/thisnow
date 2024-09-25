const model = require('../db/models/postsModel');



exports.getAllPosts = async (req, res) => {
  try {

    const posts = await model.getAllPosts();

    if (posts) {
      res.status(200).send(posts);
      return posts;
    } else {
      res.status(404).send('Couldnt get Posts')
    }

  } catch (error) {
    res.status(500).send('Something happened:', error);
  }

}

exports.newPost = async (req,res ) => {
  try {
    
    const post = req.body;
    console.log(post)
    const newPost = await model.newPost(post);
    console.log(newPost)
    if (newPost) {
      res.status(201).send(newPost);
    } else {
      res.status(400).send('Couldnt create post')
    }

  } catch (error) {
    res.status(500).send('Something happened:', error);
  }
}
