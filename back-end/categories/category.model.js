const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    inMenu: {
        type: Boolean
    }
});

const Category = module.exports = mongoose.model('Category', categorySchema);

module.exports.getAllCategories = async () => {
    let categories;
    try {
        categories = await Category.find({});
        return { success: true, data: categories };
    } catch (err) {
        return { success: false, data: null, error: err };
    }
}

module.exports.getCategoryById = async (id) => {
    const query = { _id: id };

    let category;
    try {
        category = await Category.find(query);
    } catch (err) {
        return { success: false, data: null, error: err };
    }
    if (category) {
        return { success: true, data: category };
    } else {
        return { success: false, data: 'category not found' };
    }
}

module.exports.addCategory = async (newCategory) => {
    let category;
    try {
        category = await newCategory.save();
        return { success: true, data: 'category added' };
    } catch (err) {
        return { success: false, data: null, error: err };
    }
}

module.exports.deleteCategory = async (categoryId) => {
    let category;
    try {
        category = await Category.findByIdAndRemove(categoryId);
    } catch (err) {
        return { success: false, data: null, error: err };
    }

    if (category) {
        return { success: true, data: category };
    } else {
        return { success: false, data: 'category not found' };
    }
}