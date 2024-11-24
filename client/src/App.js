import './App.css';

import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import FoodDatabasePage from './pages/FoodDatebasePage';
import DictionaryGPT from './pages/DictionaryGPT';
import SearchFoodNutritions from './pages/SearchFoodNutritions';
import DiatRecommendation from './pages/DietRecommendation';
import CalorieCalculator from './pages/CalorieCalculator';
import FitnessPlan from './pages/FitnessPlan';
import Register from './pages/Register';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <h1 style={{
        textAlign: 'center',
        marginTop: 50,
        color: 'Gray',
      }}>Calorie Tracker App</h1>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/search-food-nutritions' element={<SearchFoodNutritions />}/>
          <Route path='/Diet-recommendation' element={<DiatRecommendation />} />
          <Route path='/calorie-calculator' element={<CalorieCalculator />} />
          <Route path='/fitness-plan' element={<FitnessPlan />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
