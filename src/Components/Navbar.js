import React, { useContext } from 'react';
import logo from './Imgs/logo-r.png';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext'; // Import AuthContext
import ProtectedRoute from './ProtectedRoute'; // Import ProtectedRoute
import '../App.css';
export default function Navbar() {
  const { currentUser, logout } = useContext(AuthContext); // Get currentUser and logout from context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img src={logo} className="Site-img" alt="site logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>

            {/* Conditionally render protected links */}
            {currentUser && (
              <>
                <li className="nav-item">
                  <ProtectedRoute>
                    <Link className="nav-link" to="/AnalyzeFile">Analyze File</Link>
                  </ProtectedRoute>
                </li>
                <li className="nav-item">
                  <ProtectedRoute>
                    <Link className="nav-link" to="/AnalyzeURL">Analyze URL</Link>
                  </ProtectedRoute>
                </li>
                <li className="nav-item">
                  <ProtectedRoute>
                    <Link className="nav-link" to="/Report">Reports</Link>
                  </ProtectedRoute>
                </li>
              </>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>

            {/* Conditionally render login/signup or logout */}
            {currentUser ? (
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button> {/* Logout button */}
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};