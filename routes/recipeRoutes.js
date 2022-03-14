import express from 'express';

import { 
    getAllRecipes, 
    createRecipe, 
    getRecipeById 
} from '../controllers/recipes.js';

const router = new express.Router();

router.get('/', getAllRecipes);
router.get('/:id', getRecipeById);
router.post('/', createRecipe);

export default router;