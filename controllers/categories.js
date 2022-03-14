import Category from "../models/categoryModel.js";

export const getRecipeAllCategory = async (req,res) => {
    try {
        const allCategory = await Category.findAll();
        const msg = {
            success: true,
            message: "Success",
            data: allCategory
        }
        res.status(200).send(msg);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}

export const getRecipeCategoryById = async (req,res) => {
    const checkId = await Category.findByPk(req.params.id);
    if(!checkId) return res.status(404).json({message: "data not found"});
    try {
        const category = await Category.findByPk(req.params.id);
        const msg = {
            success: true,
            message: "Success",
            data: category
        }
        res.status(200).send(msg);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}

export const createCategory = async (req,res) => {
    try {
        const addCategory = await Category.create(req.body);
        const msg = {
            success: true,
            message: "Success",
            data: addCategory
        }
        res.status(201).send(msg);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}

export const updateRecipeCategory = async (req,res) => {
    const checkId = await Category.findByPk(req.params.id);
    if(!checkId) return res.status(404).json({message: "data not found"});
    try {
        const updateCategory = await Category.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        const findUpdateCategoryById = await Category.findByPk(req.params.id);
        const msg = {
            success: true,
            message: "Success",
            data: findUpdateCategoryById
        }
        res.status(200).send(msg);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}

export const deleteRecipeCategory = async (req,res) => {
    const checkId = await Category.findByPk(req.params.id);
    if(!checkId) return res.status(404).json({message: "data not found"});
    try {
        const deleteCategory = await Category.destroy({
            where: {
                id: req.params.id
            }
        });
        const findDeleteCategoryById = await Category.findByPk(req.params.id);
        const msg = {
            success: true,
            message: "Success",
            data: findDeleteCategoryById
        }
        res.status(200).send(msg);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}