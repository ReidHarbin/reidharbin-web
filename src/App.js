import './App.css';
import React from 'react'
import { NavLink } from "react-router-dom";



import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

import Contact from './pages/contact';
import Blog from './pages/blog';
import Home from './pages/home';
import Projects from './pages/projects';

function App() {
    return (
        <Router>
            <div className="flex flex-col h-screen font-ArchivoBlack">
                <div className="bg-slate-900 p-2">
                    <div className="flex justify-end">
                        <NavLink className="text-white text-lg px-3 " to="/">Home</NavLink>
                        <NavLink className="text-white text-lg px-3 " to="/projects">Projects</NavLink>
                        <NavLink className="text-white text-lg px-3 " to="/blog">Blog</NavLink>
                        <NavLink className="text-white text-lg px-3 " to="/contact">Contact</NavLink>
                    </div>
                </div>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/projects' element={<Projects/>} />
                    <Route path='/blog' element={<Blog />} />
                </Routes>
            </div>
        </Router>

  );
}

export default App;
