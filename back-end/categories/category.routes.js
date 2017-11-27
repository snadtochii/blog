const express = require('express');
const router = express.Router();

const Category = require('./category.model');

/* GET all categories. */
router.get('/', async (req, res, next) => {
    const result = await Category.getAllCategories();
    res.json(result);
});

/* GET category by id. */
router.get('/:id', async (req, res, next) => {
    const categoryId = req.params.id;

    const result = await Category.getCategoryById(categoryId);
    res.json(result);
});

/* POST new category. */
router.post('/', async (req, res, next) => {
    const newCategory = new Category({
        title: req.body.title,
        description: req.body.description
    });

    const result = await Category.addCategory(newCategory);
    res.json(result);
});

/* DELETE category. */
router.delete('/:id', async (req, res, next) => {

    const categoryId = req.params.id;

    const result = await Category.deleteCategory(categoryId);
    res.json(result);
});

module.exports = router;