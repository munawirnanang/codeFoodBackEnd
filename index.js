import express from 'express';

import db from './config/database.js';
import categoryRoutes from "./routes/categoryRoutes.js";
import recipeRoutes from "./routes/recipeRoutes.js";
import cors from "cors";

const app = new express();

try {
    await db.authenticate();
    console.log('database connected...');
} catch (error) {
    console.error('connection error:', error);
    
}

app.use(cors());
app.use(express.json());
app.use('/recipe-categories', categoryRoutes);
app.use('/recipes', recipeRoutes);

app.listen(3030, () => console.log('server running on port 3030'));