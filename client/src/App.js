import './App.css';

import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import FoodDatabasePage from './pages/FoodDatebasePage';
import DictionaryGPT from './pages/DictionaryGPT';

function App() {
  return (
    <div className="App">
      <Homepage />
      <DictionaryGPT />
      <Footer />
    </div>
    
  );
}

export default App;
