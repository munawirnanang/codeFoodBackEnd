import Category from '../models/categoryModel.js';
import Recipe from '../models/recipeModel.js';

export const getAllRecipes = async (req, res) => {
    try {
        const allRecipes = await Recipe.findAll({
            attributes: 
                [
                    'id', 
                    'name', 
                    'recipeCategoryId', 
                    'image', 
                    'nReactionLike', 
                    'nReactionNeutral', 
                    'nReactionDislike', 
                    'createdAt', 
                    'updatedAt'
                ],
            include: {
                model: Category,
                as: 'recipeCategory'
            }
        });
        res.status(200).json(allRecipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findByPk(req.params.id);
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createRecipe = async (req, res) => {
    try {
        const addRecipe = await Recipe.create(req.body);
        res.status(201).json(addRecipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}