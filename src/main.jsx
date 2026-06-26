import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './css/navbar.css'
import './css/home.css'
import './css/about.css'
// import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Home from './Home'
import About from './About'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
    <Navbar />

<div className="divider"></div>

<Home />
<About />
    </div>
  </StrictMode>,
)






