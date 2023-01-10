import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css';

import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <div className="conainer">
          <Routes>
          <Route path='/' element={<Home />}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
