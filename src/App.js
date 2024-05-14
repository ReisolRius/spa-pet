import logo from './logo.svg';
import './App.css';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Recipe from './components/Recipe'

import {Routes, Route, Link, useParams} from 'react-router-dom'
import recipe from './base/data.json'

import Preloader from './components/Preloader'

function App() {


  return (
    <>
    <Preloader/>
      <BrowserRouter basename='/spa-pet'>
        <header>
          <p><Link to="/">Home</Link></p> 
          <p><Link to="/about">About</Link></p>
          <p><Link to="/contact">Contact</Link></p>
        </header>
        <div className='container'>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='contact/' element={<Contact/>} />
          <Route path='about/' element={<About/>} />
          <Route path='recipe/:id' element={<Recipe/>} />
        </Routes>

        </div>
        <footer>
          <h1>Rius Recepts 2024</h1>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
