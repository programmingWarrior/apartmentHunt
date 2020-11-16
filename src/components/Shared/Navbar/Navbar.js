import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <Link to="/" className="navbar-brand">
                    <img src="https://iili.io/FolVTP.png"  height="55" alt="" loading="lazy"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link to="/" className="nav-link active">
                            Home <span className="sr-only">(current)</span>
                        </Link>
                        <Link to="" className="nav-link">
                            About
                        </Link>
                        <Link to="" className="nav-link">
                            Service
                        </Link>
                        <Link to="" className="nav-link">
                            Concerns
                        </Link>
                        <Link to="" className="nav-link">
                            Event
                        </Link>
                        <Link to="" className="nav-link">
                            Contact
                        </Link>
                        <Link to="" className="nav-link">
                            Login
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;