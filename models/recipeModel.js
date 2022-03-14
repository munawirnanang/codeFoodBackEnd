import { Sequelize } from 'sequelize';
import db from "../config/database.js";
import Category from "./categoryModel.js";

const { DataTypes } = Sequelize;

const Recipe = db.define('recipe', {
    "name": DataTypes.STRING,
    "recipeCategoryId": DataTypes.INTEGER,
    "image": DataTypes.TEXT,
    "nServing": DataTypes.INTEGER,
    "ingredientsPerServing": DataTypes.TEXT,
    "steps": DataTypes.TEXT,
    "nReactionLike": DataTypes.INTEGER,
    "nReactionNeutral": DataTypes.INTEGER,
    "nReactionDislike": DataTypes.INTEGER
}, {
    freezeTableName: true
}); 

Recipe.belongsTo(Category, {as: 'recipeCategory'});
Category.hasMany(Recipe);

export default Recipe;