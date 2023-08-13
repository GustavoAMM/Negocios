import React from "react";

import mesaImage from "../../public/mesa.jpg";
import sillaImage from "../../public/silla.jpg";
import paqueteImage from "../../public/paquete.jpg";

const products = [
  {
    id: 1,
    name: "Mesa rectangular",
    description: "Una mesa elegante y moderna para tu evento.",
    price: "$20",
    image: mesaImage,
  },
  {
    id: 2,
    name: "Silla individual",
    description: "Silla cómoda y clásica para tus invitados.",
    price: "$10",
    image: sillaImage,
  },
  {
    id: 3,
    name: "Paquete de mesa y sillas",
    description: "1 mesa, 10 sillas y 1 mantel.",
    price: "$85",
    image: paqueteImage,
  },
];

export function Products() {
  return (
    <div className="bg-gray-100 py-10" id="productos">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          Nuestros Productos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
              <div className="aspect-w-1 aspect-h-1 mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover rounded-lg w-full h-[320px]"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-green-600 font-semibold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
