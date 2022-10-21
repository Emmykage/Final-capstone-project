// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Navaigation from './components/nav/Navigation';
import Details from './pages/Details';
import Motocycles from './pages/Motocycles';
import NewMotocycle from './pages/NewMotocycle';
import ReserveForm from './pages/ReserveForm';
import Reservation from './pages/Reservations';

function App() {
  return (

    <div className="container">
      <Navaigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/motocycles" element={<Motocycles />} />
        <Route path="/new" element={<NewMotocycle />} />
        <Route path="/reserve_form" element={<ReserveForm />} />
        <Route path="/reservations" element={<Reservation />} />
      </Routes>

    </div>

  );
}

export default App;
