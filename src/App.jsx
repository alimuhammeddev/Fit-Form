import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import ScrollToTop from './Components/ScrollToTop';
import About from './Pages/About';

const App = () => {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='about-us' element={<About />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App