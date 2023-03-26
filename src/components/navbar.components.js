import { Link } from "react-router-dom";

const Navbar=()=>
{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-secondary ">
          <div className="container">
          <a className="navbar-brand text-dark  fs-4 me-2" href="#">
          <img src="\logo.jpg" alt="" width="50" height="50" className="d-inline-block align-text-top"/>
          Dream Organizer's
          </a>
          </div>
    
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link text-dark"  aria-current="page" to="/">Home</Link>

              </li>
              <li className="nav-justify-content-end">
                <Link className="nav-link text-dark"  aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-dark"  aria-current="page" to="/services">Services</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-dark"  aria-current="page" to="/team">Team</Link>
              </li>
            </ul>   
          </div>
        </nav>
        
        </>
    )
}
export default Navbar;