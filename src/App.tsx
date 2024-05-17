
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Footer from './components/footer/Footer';
import Navbar from './components/navBar/NavBar';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
 
);
}
export default App;