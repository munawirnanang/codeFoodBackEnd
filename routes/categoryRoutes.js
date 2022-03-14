import express from 'express';

import { 
    getRecipeAllCategory, 
    createCategory, 
    getRecipeCategoryById,
    updateRecipeCategory,
    deleteRecipeCategory
 } from '../controllers/categories.js';

const router = new express.Router();

router.get('/', getRecipeAllCategory);
router.get('/:id', getRecipeCategoryById);
router.post('/', createCategory);
router.patch('/:id', updateRecipeCategory);
router.delete('/:id', deleteRecipeCategory);

export default router;