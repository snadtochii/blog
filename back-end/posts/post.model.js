const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    preview: {
        type: String,
        required: true
    },

    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
});

const Post = module.exports = mongoose.model('Post', postSchema);

module.exports.getAllPostsPreview = async () => {
    let posts;
    try {
        posts = await Post.find({});
        return { success: true, data: posts };
    } catch (err) {
        return { success: false, data: null, error: err };
    }
}

module.exports.getPostById = async (id) => {
    let post;
    try {
        post = await Post.findOne({ _id: id });
    } catch (err) {
        return { success: false, data: null, error: err };
    }
    if (post) {
        return { success: true, data: post };

    } else {
        return { success: false, data: 'post not found' };
    }
}

module.exports.addPost = async (newPost) => {

    let post;
    try {
        post = await newPost.save();
        return { success: true, data: 'post added' };
    } catch (err) {
        return { success: false, data: null, error: err };
    }
}

module.exports.updatePost = async (postId, newPost) => {
    let post;
    try {
        post = await Post.findByIdAndUpdate(postId, { $set: { title: newPost.title, category: newPost.category, body: newPost.body } }, {new: true});
    } catch (err) {
        return { success: false, data: null, error: err };
    }

    if (post) {
        return { success: true, data: post };
    } else {
        return { success: false, data: 'post not found' };
    }
}

module.exports.deletePost = async (postId) => {
    let post;
    try {
        post = await Post.findByIdAndRemove(postId);
    } catch (err) {
        return { success: false, data: null, error: err };
    }

    if (post) {
        return { success: true, data: post };
    } else {
        return { success: false, data: 'post not found' };
    }
}