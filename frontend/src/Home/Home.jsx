import React, { useState } from "react";
import { useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import backgroundImage from "../../public/background.jpeg";
import axios from "axios";

export function Home() {
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // alerta de campos vacios
  const [showAlertCampos, setShowAlertCampos] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    deliveryDate: "",
    paymentMethod: "efectivo",
    product: "Mesa rectangular",
    quantity: 1,
    status: "Pendiente",
  });
  const productos = [
    {
      id: 1,
      name: "Mesa rectangular",
      description: "Una mesa elegante y moderna para tu evento.",
      price: "$20",
    },
    {
      id: 2,
      name: "Silla individual",
      description: "Silla cómoda y clásica para tus invitados.",
      price: "$10",
    },
    {
      id: 3,
      name: "Paquete de mesa y sillas",
      description: "1 mesa, 10 sillas y 1 mantel.",
      price: "$85",
    },
  ];

  const handleSubmit = async () => {
    try {
      if (
        formData.name === "" ||
        formData.address === "" ||
        formData.phone === "" ||
        formData.email === "" ||
        formData.deliveryDate === "" ||
        formData.paymentMethod === "" || 
        formData.product === ""
      ){
        setShowAlertCampos(true);
        return;
      }

      const response = await axios.post(
        "http://localhost:3001/add-order",
        formData
      );
      if (response.data.success) {
        setShowAlert(true);
      } else {
        setShowErrorAlert(true);
      }
      onClose();
    } catch (error) {
      setShowErrorAlert(true);
      onClose();
    }
  };

  useEffect(() => {
    let alertTimer;
    if (showAlert) {
      alertTimer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
    return () => clearTimeout(alertTimer);
  }, [showAlert]);

  useEffect(() => {
    let alertTimer;
    if (showErrorAlert) {
      alertTimer = setTimeout(() => {
        setShowErrorAlert(false);
      }, 3000);
    }
    return () => clearTimeout(alertTimer);
  }, [showErrorAlert]);

  useEffect(() => {
    let alertTimer;
    if (showAlertCampos) {
      alertTimer = setTimeout(() => {
        setShowAlertCampos(false);
      }, 1000);
    }
    return () => clearTimeout(alertTimer);
  }, [showAlertCampos]);

  return (
    <div
      className="bg-gradient-to-r from-purple-600 to-indigo-800 min-h-screen flex flex-col justify-center items-center overflow-hidden blur-background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      id="home"
    >
      <div className="container mx-auto px-4 text-center bg-white bg-opacity-70 p-10 rounded-lg shadow-lg h-60">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
          ¡Bienvenidos a Alquileres Montoya!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Tu mejor opción para alquilar mesas y sillas para eventos especiales.
        </p>
        <ButtonGroup>
          <Button
            colorScheme="blue"
            size="lg"
            _hover={{ bg: "blue.600" }}
            _focus={{ boxShadow: "none" }}
            onClick={onOpen}
          >
            Realizar Pedido de Alquiler
          </Button>
        </ButtonGroup>
      </div>

      {/* Alerta de success*/}
      {showAlert && (
        <div className="fixed top-0 right-0 m-8">
          <div className="bg-green-500 text-white font-bold rounded-t px-4 py-2">
            Pedido Realizado
          </div>
          <div className="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
            <p className="text-sm">
              Tu pedido ha sido realizado con éxito. Nos pondremos en contacto
              contigo para confirmar tu pedido.
            </p>
          </div>
        </div>
      )}

      {/* Alerta de error */}
      {showErrorAlert && (
        <div className="fixed top-0 right-0 m-8">
          <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Error
          </div>
          <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p className="text-sm">Ha ocurrido un error. Inténtalo de nuevo.</p>
          </div>
        </div>
      )}

      {/* Alerta de campos vacios */}
      {showAlertCampos && (
        <div className="fixed top-0 right-0 m-8">
          <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Error
          </div>
          <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p className="text-sm">Por favor, completa todos los campos.</p>
          </div>
        </div>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="text-center">
            Realizar Pedido de Alquiler
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={4}
            >
              <GridItem>
                <FormControl>
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </FormControl>
                <br />
                <FormControl>
                  <FormLabel>Teléfono</FormLabel>
                  <Input
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </FormControl>
                <br />
                <FormControl>
                  <FormLabel>Fecha de Entrega</FormLabel>
                  <Input
                    type="date"
                    value={formData.deliveryDate}
                    onChange={(e) =>
                      setFormData({ ...formData, deliveryDate: e.target.value })
                    }
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <FormLabel>Dirección</FormLabel>
                  <Input
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                  />
                </FormControl>
                <br />
                <FormControl>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </FormControl>
                <br />
                <FormControl>
                  <FormLabel>Método de Pago</FormLabel>
                  <Select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        paymentMethod: e.target.value,
                      })
                    }
                  >
                    <option value="efectivo">Efectivo</option>
                    <option value="tarjeta">Tarjeta de Crédito</option>
                    <option value="transferencia">
                      Transferencia Bancaria
                    </option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <FormLabel>Producto</FormLabel>
                  <Select
                    value={formData.product}
                    onChange={(e) =>
                      setFormData({ ...formData, product: e.target.value })
                    }
                  >
                    {productos.map((producto) => (
                      <option key={producto.id} value={producto.name}>
                        {producto.name} - {producto.price}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <FormLabel>Cantidad</FormLabel>
                  <Input
                  type="number"
                  min={1}
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                />
              </FormControl>
              </GridItem>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Confirmar Pedido
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
