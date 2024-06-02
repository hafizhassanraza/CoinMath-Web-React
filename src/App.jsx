import './App.css';
import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Main from './pages/Main';
import Wallet from './pages/Wallet';
import Referrals from './pages/Referrals';
import News from './pages/News';
import Profile from './pages/Profile';
import Token from './pages/Token';
import Login from './pages/Login';
import { ComplexNavbar } from './components/Header';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import EmailChecker from './pages/EmailChecker';

function App() {
  let user = true;

  function NavbarControl() {
    const location = useLocation();
    const isSignInRoute = location.pathname === '/signin';
    const isSignUpRoute = location.pathname === '/signup';
    const isLoginRoute = location.pathname === '/login';
    const isProtectedRoute = location.pathname !== '/signin' && location.pathname !== '/signup' && location.pathname !== '/login';

    return isProtectedRoute && <ComplexNavbar />;
  }

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarControl />
        <Routes>
          <Route path="/" element={<ProtectedRoute user={user} />}>
            <Route index element={<Main />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/token" element={<Token />} />
            <Route path="/ref" element={<Referrals />} />
            <Route path="/news" element={<News />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/check' element={<EmailChecker />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
