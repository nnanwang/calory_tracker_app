import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import mongoose from 'mongoose';
import userRoutes from './routes/user.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use(bodyParser.json());

app.use('/api/users', userRoutes);

// connect to MongoDB
mongoose.connect('mongodb://localhost:27017/calorieDB')
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/foods', (req, res) => {
    res.json([
        { id: 1, name: 'Apple', calories: 95 },
        { id: 2, name: 'Banana', calories: 105 },
        { id: 3, name: 'Orange', calories: 62 }
    ])
})


app.get('/api/food-nutritions', (req, res) => {
    const searchQuery = req.query.q ? req.query.q.toLowerCase() : '';
    fs.readFile('food.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading JSON file');
            return;
        }

        let foods;

        try {
            foods = JSON.parse(data);
        } catch (parseError) {
            res.status(500).send('Error parsing JSON file');
            return;
        }

        const filteredFoods = foods.filter(food =>
            food.name.toLowerCase().includes(searchQuery)
        );

        const result = filteredFoods.map(food => {
            return {
                name: food.name,
                nutrition: food['nutrition-per-100g'],
            };
        });

        res.json(result);
        
    });

});

