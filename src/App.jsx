import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import ScrollToTop from './Components/ScrollToTop';
import About from './Pages/About';
import { Gym } from './Components';
import Classes1 from './Pages/Classes1';
import Blog1 from './Pages/Blog1';
import BlogNutrition from './Pages/BlogNutrition';
import Store from './Pages/Store';
import Yoga from './Pages/Yoga';

const App = () => {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about-us' element={<About />}/>
          <Route path='/gym-membership' element={<Gym />}/>
          <Route path='/classes' element={<Classes1 />}/>
          <Route path='/blog' element={<Blog1 />}/>
          <Route path='/blog-nutrition' element={<BlogNutrition />}/>
          <Route path='/store' element={<Store />}/>
          <Route path='/yoga' element={<Yoga />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App