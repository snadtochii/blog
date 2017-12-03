const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Category = module.exports = mongoose.model('Category', categorySchema);

module.exports.getAllCategories = async () => {
    let categories;
    try {
        categories = await Category.find({});
        return { success: true, data: { categories: categories } };
    } catch (err) {
        return { success: false, data: { error: err } };
    }
}

module.exports.getCategoryById = async (id) => {
    const query = { _id: id };

    let category;
    try {
        category = await Category.find(query);
    } catch (err) {
        return { success: false, data: { msg: '', error: err } };
    }
    if (category) {
        return { success: true, data: { category: category } };
    } else {
        return { success: false, data: { msg: 'category not found' } };
    }
}

module.exports.addCategory = async (newCategory) => {
    let category;
    try {
        category = await newCategory.save();
        return { success: true, data: { msg: 'category added' } };
    } catch (err) {
        return { success: false, data: { msg: 'category not added', error: err } };
    }
}

module.exports.deleteCategory = async (categoryId) => {
    let category;
    try {
        category = await Category.findByIdAndRemove(categoryId);
    } catch (err) {
        return { success: false, data: { msg: 'not deleted', error: err } };
    }

    if (category) {
        return { success: true, data: { msg: 'deleted', category: category } };
    } else {
        return { success: false, data: { msg: 'category not found' } };
    }
}