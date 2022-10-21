// import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import Navaigation from './components/nav/Navigation';

function App() {
  return (

    <div className="container">
      <Navaigation />
      <Home />
    </div>

  );
}

export default App;
