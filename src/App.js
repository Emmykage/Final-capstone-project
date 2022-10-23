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
import MainLayout from './layout/main';

function App() {
  return (

      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/details" element={
          <MainLayout>
            <Details
            motocycle={
              {
                image:"https://imgd.aeplcdn.com/1280x720/bw/models/vespa-sxl-150-bs-vi--fi20200114182809.jpg?q=80",
                name: "Vespa 946",
                financeFee: 129,
                purchaseFee:249,
                payable: 9879,
                duration: 48,
              }
            }
            />
          </MainLayout>} />
        <Route path="/motocycles" element={<MainLayout><Motocycles /></MainLayout>} />
        <Route path="/new" element={<MainLayout><NewMotocycle /></MainLayout>} />
        <Route path="/reserve_form" element={<MainLayout><ReserveForm /></MainLayout>} />
        <Route path="/reservations" element={<MainLayout><Reservation /></MainLayout>} />
      </Routes>

  );
}

export default App;
