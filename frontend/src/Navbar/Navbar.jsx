import React, { useState } from 'react';
import { Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';
import { Admin } from '../Admin/Admin';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isAtAdminRoute = location.pathname.startsWith("/admin");
  const isAtDashboardRoute = location.pathname.startsWith("/dashboard");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="bg-gray-800">
        <nav className="flex justify-between items-center p-4 md:p-8 container mx-auto">
          <div className="text-white text-xl font-semibold">Alquileres Montoya</div>
          <div className="md:hidden flex">
            <button className="text-white" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <ul className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:space-x-6 mt-4 md:mt-0`}>
            {isAtAdminRoute || isAtDashboardRoute ? (
              <li><Link to="/" className="text-white hover:text-gray-300">Back</Link></li>
            ) : (
              <>
                <li><a href="#home" className="text-white hover:text-gray-300">Inicio</a></li>
                <li><a href="#nosotros" className="text-white hover:text-gray-300">Nosotros</a></li>
                <li><a href="#productos" className="text-white hover:text-gray-300">Productos</a></li>
                <li><Link to="/admin" className="text-white hover:text-gray-300">Admin</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
