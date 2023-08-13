import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Alquileres Montoya. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
