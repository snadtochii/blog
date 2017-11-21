const express = require('express');
const router = express.Router();

const Post = require('./post.model');

/* GET all posts preview. */
router.get('/', async (req, res, next) => {
  const result = await Post.getAllPostsPreview();
  res.json(result);
});

/* POST new post. */
router.post('/', async (req, res, next) => {
  
    const newPost = new Post({
      title: req.body.title,
      category: req.body.category,
      body: req.body.body
    });
  
    const result = await Post.addPost(newPost);
    res.json(result);
  });

/* GET post by id. */
router.get('/:id', async (req, res, next) => {
  const postId = req.params.id;

  const result = await Post.getPostById(postId);
  res.json(result);
});


/* PUT the post. */
router.put('/:id', async (req, res, next) => {
  const postId = req.params.id;

  const newPost = new Post({
    title: req.body.title,
    category: req.body.category,
    body: req.body.body
  });

  const result = await Post.updatePost(postId, newPost);
  res.json(result);
});

/* DELETE post. */
router.delete('/:id', async (req, res, next) => {

  const postId = req.params.id;

  const result = await Post.deletePost(postId);
  res.json(result);
});

module.exports = router;
