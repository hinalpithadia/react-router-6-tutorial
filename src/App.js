import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [user, setUser] = useState(null);
  return (
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='About' element={<About/>}/>
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
