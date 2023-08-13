import React from "react";

export function Contact() {
  return (
    <div className="bg-[#1F2937] py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          Contáctanos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white bg-opacity-90 backdrop-blur-lg p-4 rounded-lg shadow-lg grid ">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Información de Contacto
            </h3>
            <p className="text-gray-600 mb-2">
              Si tienes alguna pregunta o necesitas más información, no dudes
              en contactarnos.
            </p>
            <p className="text-gray-600 mb-2">
              Teléfono: <span className="text-blue-500">123-456-7890</span>
            </p>
            <p className="text-gray-600">
              Correo Electrónico:{" "}
              <span className="text-blue-500">info@alquileresmontoya.com</span>
            </p>
          </div>
          <div className="bg-white bg-opacity-90 backdrop-blur-lg p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Ubicación
            </h3>
            <p className="text-gray-600 mb-2">
              Estamos ubicados en: <br />
              <span className="text-blue-500">
                Querétaro, México
              </span>
            </p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94603.97095038859!2d-100.42636977478062!3d20.593123422973665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429e2c374bb8313%3A0x2f3be1f6c24f6089!2sQuer%C3%A9taro%2C%20Qro.!5e0!3m2!1sen!2smx!4v1670227892825!5m2!1sen!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
