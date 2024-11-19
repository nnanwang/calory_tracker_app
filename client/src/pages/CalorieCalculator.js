import React, { useState } from 'react';

const CalorieCalculator = () => {
    const [gender, setGender] = useState('male');
    const [weight, setWeight] = useState(''); // weight in kg
    const [height, setHeight] = useState(''); // height in cm
    const [age, setAge] = useState(0);
    const [activity, setActivity] = useState(1.2);
    const [calorie, setCalorie] = useState(0);

    const calculateBMR = () => {
        const weightInKg = parseFloat(weight);
        const heightInCm = parseFloat(height);

        let BMR;
        if (gender === 'male') {
            BMR = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5;

        } else {
            BMR = 10 * weightInKg + 6.25 * heightInCm - 5 * age - 161;
        }

        const totalCalorie = BMR * activity;
        setCalorie(totalCalorie.toFixed(2));
        
    };

    return (
        <div>
            <h1>Calorie Calculator</h1>
            <div>
                <label>Gender</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

            <div>
                <label>Weight(kg)</label>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter weight in kg"
                />
            </div>

            <div>
                <label>Height(cm)</label>
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Enter height in cm"
                />
            </div>

            <div>
                <label>Age</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Enter age"
                />
            </div>

            {/* Sedentary (little or no exercise): BMR * 1.2
Lightly active (light exercise or sports 1-3 days a week): BMR * 1.375
Moderately active (moderate exercise or sports 3-5 days a week): BMR * 1.55
Very active (hard exercise or sports 6-7 days a week): BMR * 1.725
Super active (very hard exercise, physical job, or training twice a day): BMR * 1.9 */}
            
            <div>
                <label>Activity Level</label>
                <select value={activity} onChange={(e) => setActivity(parseFloat(e.target.value))}>
                    <option value={1.2}>Sedentary (little or no exercise)</option>
                    <option value={1.375}>Lightly active (light exercise or sports 1-3 days a week)</option>
                    <option value={1.55}>Moderately active (moderate exercise or sports 3-5 days a week)</option>
                    <option value={1.725}>Very active (hard exercise or sports 6-7 days a week)</option>
                    <option value={1.9}>Super active (very hard exercise, physical job, or training twice a day)</option>

                </select>
            </div>

            <button onClick={calculateBMR}>Calculate Calories</button>

            {calorie && (
                <div>
                    <h2>Total Daily Calorie Requirement: {calorie} kcal</h2>
                </div>
            )}
            
        </div>
    );

};

export default CalorieCalculator;
