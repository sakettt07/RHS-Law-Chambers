import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/contact' element={<Contact />} />
  
    </Routes>
  )
}

export default App
