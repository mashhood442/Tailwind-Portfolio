import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/home';
import About from './Components/pages/about';
import Skills from './Components/pages/skills';

import Footer from './Components/pages/footer';

function App() {
  return (
    <Router>
      
      <div className="flex flex-col min-h-screen bg-gray-50 overflow-x-hidden">

       
        <nav className="flex justify-between fixed top-0 left-0 w-full bg-gray-200 shadow-md ">
          <div className="p-2 mx-1">
            <a
              href="/src/Components/RESUME INTERN.pdf"
              download="RESUME tutor.pdf"
            >
              <button className="bg-blue-600 text-white px-3 py-2 text-sm rounded-lg shadow hover:bg-blue-700 transition duration-300">
                My Resume
              </button>
            </a>
          </div>
          <ul className="flex justify-end py-4 px-2 mr-16 space-x-3">
            <li className="px-2  text-sm md:text-lg text-gray-700 border border-transparent hover:border-blue-600 hover:text-blue-600 transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2 text-sm md:text-lg text-gray-700 border border-transparent hover:border-blue-600 hover:text-blue-600 transition duration-300">
              <Link to="/about">About</Link>
            </li>
            <li className="px-2 text-sm md:text-lg text-gray-700 border border-transparent hover:border-blue-600 hover:text-blue-600 transition duration-300">
              <Link to="/skills">Skills</Link>
            </li>
            
          </ul>
        </nav>

        
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            
          </Routes>
        </main>

       
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
