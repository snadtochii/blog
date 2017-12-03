const express = require('express');
const router = express.Router();

const Category = require('./category.model');
const guards = require('../configs/guards');

/* GET all categories. */
router.get('/', guards.jwtCheck, guards.adminCheck, async (req, res, next) => {
    const result = await Category.getAllCategories();
    res.json(result);
});

/* GET category by id. */
router.get('/:id', guards.jwtCheck, guards.adminCheck, async (req, res, next) => {
    const categoryId = req.params.id;

    const result = await Category.getCategoryById(categoryId);
    res.json(result);
});

/* POST new category. */
router.post('/', guards.jwtCheck, guards.adminCheck, async (req, res, next) => {
    const newCategory = new Category({
        name: req.body.name,
        description: req.body.description
    });

    const result = await Category.addCategory(newCategory);
    res.json(result);
});

/* DELETE category. */
router.delete('/:id', guards.jwtCheck, guards.adminCheck, async (req, res, next) => {

    const categoryId = req.params.id;

    const result = await Category.deleteCategory(categoryId);
    res.json(result);
});

module.exports = router;