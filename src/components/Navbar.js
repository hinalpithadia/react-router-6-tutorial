import React from "react";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    // <nav className='navbar'>
    //    <Link to='/'>Home</Link>
    //    <Link to='/about'>About</Link>
    //    <Link to='/products'>Products</Link>
    //  </nav>


    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#"><img src={require('../images/logo.png')} alt="image"/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Service
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
         
          <li className="nav-item">
            <Link to="/" className=" header-btn">
              Buy Now
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
};
export default Navbar;
