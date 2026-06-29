import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './css/navbar.css'
import './css/home.css'
import './css/about.css'
import './css/portfolio.css'
import './css/contact.css'
import './css/services.css'
// import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Home from './Home'
import About from './About'

import Portfolio from './portfolio.jsx';
import Service from './Service.jsx'
import Contact from './Contact.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
    <Navbar />

<div className="divider"></div>

<Home />
<About />
<Service />
<Portfolio />
<Contact />
    </div>
  </StrictMode>,
)






