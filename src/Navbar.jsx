// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSun } from "@fortawesome/free-regular-svg-icons";
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark  ">
            <a className="navbar-brand fs-2 fw-bold text-light ms-5 " href="#">Insight<span className="brand_text">OH</span></a>
            <button className="navbar-toggler" type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse me-5 "
        id="navbarContent">
        <ul className="navbar-nav ms-auto text-light">
          <li className="nav-item">
            <a className="nav-link" href="#home">HOME</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#about">ABOUT</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#services">SERVICES</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#portfolio">PORTFOLIO</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
            
            
    );
}