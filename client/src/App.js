import './App.css';

import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Homepage />
      <LoginPage />
      <Footer />
    </div>
    
  );
}

export default App;
