import React from "react";
import slideimg from "../../public/slideimg.jpeg";

export function About() {
  return (
    <div className="bg-gray-800 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <img src={slideimg} alt="Acerca de Nosotros" className="rounded-lg shadow-lg max-w-[400px] h-auto" />
        </div>
        <div className="md:w-1/2 md:pl-8 flex justify-center">
          <div className="bg-white bg-opacity-90 backdrop-blur-lg p-4 md:p-6 rounded-lg shadow-lg">
            <h2 className="text-4xl md:text-5xl font-semibold mb-3 md:mb-4 text-gray-800">
              Acerca de Nosotros
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
              En <span className="text-blue-500">Alquileres Montoya</span>, nos enorgullecemos de ser la mejor opción para
              tus necesidades de alquiler de mesas y sillas para eventos especiales.
              Con años de experiencia en el sector, garantizamos la calidad y
              puntualidad en cada entrega.
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
              Nuestro compromiso es brindarte un servicio excepcional y una amplia
              variedad de opciones para que tu evento sea un éxito. Ya sea una fiesta
              pequeña o un evento corporativo, estamos aquí para ayudarte a hacerlo
              realidad.
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
              ¡Confía en nosotros para hacer de tu evento una experiencia{" "}
              <span className="text-green-500">inolvidable</span>!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
