import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './pages/Dashboard/Dashboard';
import ResetPassword from './pages/resetPassword/ResetPassword';

function App() {
  return (
    <Router>
      
      <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Registration/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/reset-password" element={<ResetPassword/>} />
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
