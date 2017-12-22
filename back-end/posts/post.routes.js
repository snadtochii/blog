const express = require('express');
const multer = require('multer');
const fs = require('fs-extra');
const path = require('path');

const router = express.Router();

const Post = require('./post.model');
const guards = require('../configs/guards');

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads/images/')
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname)
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      return callback(res.end('Only images are allowed'), null)
    }
    callback(null, true)
  }
});


/* GET all posts preview. */
router.get('/', async (req, res, next) => {
  const result = await Post.getAllPostsPreview();
  res.json(result);
});

/* GET post by id. */
router.get('/:id', async (req, res, next) => {
  const postId = req.params.id;

  const result = await Post.getPostById(postId);
  res.json(result);
});

/* POST new post. */
router.post('/', guards.jwtCheck, guards.adminCheck, upload.single('titleImage'), async (req, res, next) => {
  const formData = JSON.parse(req.body.data);
  const newPost = new Post({
    title: formData.title,
    titleImage: req.file ? req.file.path : '',
    category: formData.category,
    preview: formData.preview,
    body: formData.body,
    date: formData.date
  });
  const result = await Post.addPost(newPost);
  res.json(result);
});

/* PUT the post(update). */
router.put('/:id', guards.jwtCheck, guards.adminCheck, upload.single('titleImage'), async (req, res, next) => {
  const postId = req.params.id;
  try {
  const formData = JSON.parse(req.body.data);
  } catch(error) {}

  const newPost = new Post({
    title: formData.title,
    titleImage: req.file ? req.file.path : '',
    category: formData.category,
    preview: formData.preview,
    body: formData.body,
    date: formData.date
  });
  const result = await Post.updatePost(postId, newPost);
  res.json(result);
});

/* DELETE post. */
router.delete('/:id', guards.jwtCheck, guards.adminCheck, async (req, res, next) => {

  const postId = req.params.id;

  const result = await Post.deletePost(postId);
  res.json(result);
});

module.exports = router;
