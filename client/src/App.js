import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ThankYou from './pages/ThankYou';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import { useEffect } from 'react';
// f

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/thankYou' element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
