import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Category = db.define('recipe_categories', {
    "name": {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Category;