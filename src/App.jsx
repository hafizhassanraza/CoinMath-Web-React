import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ComplexNavbar } from './components/Header';
import Main from './pages/Main';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Router>
      <ComplexNavbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </Router>
  );
}

export default App;
