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
import ReserveId from './components/Reservations/ReserveId';

function App() {
  return (

    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route
        path="/details"
        element={(
          <MainLayout>
            <Details
              motocycle={
                {
                  image: 'https://firebasestorage.googleapis.com/v0/b/hospital-tracker-ug.appspot.com/o/vespa.png?alt=media&token=c88b23e4-ccd3-4cc5-8f63-14434b49c93b',
                  name: 'Vespa 946',
                  financeFee: 129,
                  purchaseFee: 249,
                  payable: 9879,
                  duration: 48,
                  id: 1,

                }
}
            />
          </MainLayout>
        )}
      />
      <Route path="/motocycles" element={<MainLayout><Motocycles /></MainLayout>} />
      <Route path="/new" element={<MainLayout><NewMotocycle /></MainLayout>} />
      <Route path="/reserve_form" element={<MainLayout><ReserveForm /></MainLayout>} />
      <Route path="/reservations" element={<MainLayout><Reservation /></MainLayout>} />
      <Route path="/reserveId/:motocycle_id" element={<MainLayout><ReserveId /></MainLayout>} />
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
