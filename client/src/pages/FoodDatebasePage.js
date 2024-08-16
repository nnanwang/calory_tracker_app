import React, { useState, useEffect } from 'react';
import { fetchFoods } from '../API/foodAPI';

function FoodDatabasePage() {
    const [foods, setFoods] = useState([]);
    
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchFoods();
                setFoods(data);

            } catch (error) {
                console.error('Failed to fetch foods:', error);
            }
        }
        loadData();
    }, []);

    return (
        <div>
            <h1>Food Database</h1>
            <ul>
                {foods.map((food) => (
                    <li key={food.id}>
                        {food.name} - {food.calories} calories
                    </li>
                ))}
            </ul>
        </div>
    )
        
    
}

export default FoodDatabasePage;