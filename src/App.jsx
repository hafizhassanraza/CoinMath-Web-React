import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ComplexNavbar } from './components/Header';
import Main from './pages/Main';
import Wallet from './pages/Wallet';
import Token from './pages/Token';
import Referrals from './pages/Referrals';
import News from './pages/News';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <ComplexNavbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/token" element={<Token />} />
        <Route path="/ref" element={<Referrals />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
