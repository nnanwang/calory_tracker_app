import React, { useState } from 'react';
import axios from 'axios';

const SearchFoodNutritions = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredFoods, setFilteredFoods] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = async () => {
        if (!searchQuery) return;

        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`http://localhost:5000/api/food-nutritions?q=${searchQuery}`);
            const data = response.data;

            setFilteredFoods(data);
        } catch (err) {
            setError('Failed to fetch food data');
        } finally {
            setLoading(false);
        }
        
    };

    return (
        <div>
            <h1>Search Food Nutrition</h1>
            <input
                type='text'
                placeholder='Enter part of the food name...'
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <button onClick={handleSearch}>Search Food</button>

            {loading && <p>Loading...</p>}

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {filteredFoods.length > 0 && (
                <div>
                    <h2>Search Results</h2>
                    <p>Nutrition per 100g</p>
                    <ul>
                        {filteredFoods.map((food, index) => {
                            const nutrition = food.nutrition || {};
                            return (
                                <li key={index}>
                                    <h3>{food.name}</h3>
                                    <ul>
                                        <li>Energy: {nutrition.energy ?? 'No data'} kj</li>
                                        <li>Protein: {nutrition.protein ?? 'No data'} g</li>
                                        <li>Fat: {nutrition.fat ?? 'No data'} g</li>
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}


        </div>
    )
}

export default SearchFoodNutritions;