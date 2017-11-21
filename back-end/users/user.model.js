const mongoose = require('mongoose');

mongoose.Promise = global.Promise

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', userSchema);

module.exports.addUser = async (newUser) => {
    return await newUser.save();
}

module.exports.getUserByUsername = async (username) => {
    const query = { username: username };
    try {
        return await User.findOne(query);
    } catch (err) {
        return { success: false, error: err }
    }
};

module.exports.comparePassword = (password, candidate) => {
    if (password === candidate) {
        return true;
    } else {
        return false;
    }
}