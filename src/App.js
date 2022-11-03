// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Details from './pages/Details';
import Motocycles from './pages/Motocycles';
import NewMotocycle from './pages/NewMotocycle';
import ReserveForm from './pages/ReserveForm';
import Reservation from './pages/Reservations';
import MainLayout from './layout/main';
import Delete from './pages/Delete';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ForgotPassword from './pages/auth/forgot-password';
import ResetPassword from './pages/auth/reset-password';
import Splashscreen from './pages/splashscreen';

function App() {
  return (

    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/motocycles" element={<MainLayout><Motocycles /></MainLayout>} />
      <Route path="/new" element={<MainLayout><NewMotocycle /></MainLayout>} />
      <Route path="/reserve_form" element={<MainLayout><ReserveForm /></MainLayout>} />
      <Route path="/reservations" element={<MainLayout><Reservation /></MainLayout>} />
      <Route path="/delete" element={<MainLayout><Delete /></MainLayout>} />
      <Route path="/details/:id" element={<MainLayout><Details /></MainLayout>} />
      <Route path="/splash_page" element={<Splashscreen />} />
      <Route path="auth">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>

    </Routes>

  );
}

export default App;
