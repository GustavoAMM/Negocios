import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  CircularProgress,
  Container,
  Button,
} from "@chakra-ui/react";

export function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/get-orders")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setOrders(data.orders);
          console.log("Datos de pedidos obtenidos:", data.orders); // Agregado
        } else {
          console.error("Error al obtener los pedidos:", data.message);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los pedidos:", error);
        setLoading(false);
      });
  }, []);

  const handleStatusChange = (orderId) => {
    // Aquí puedes implementar la lógica para cambiar el estado del pedido
    // Por ahora, simplemente actualizaremos el estado local en el frontend
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId
          ? { ...order, status: order.status === "Pendiente" ? "Hecho" : "Pendiente" }
          : order
      )
    );
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Heading size="xl" mb={4}>
        Lista de Pedidos
      </Heading>
      {loading ? (
        <Box display="flex" alignItems="center" justifyContent="center" minHeight="200px">
          <CircularProgress isIndeterminate color="blue.500" />
        </Box>
      ) : (
        <Box overflowX="auto">
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Nombre</Th>
                <Th>Producto</Th>
                <Th>Cantidad</Th>
                <Th>Dirección</Th>
                <Th>Teléfono</Th>
                <Th>Email</Th>
                <Th>Fecha de Entrega</Th>
                <Th>Método de Pago</Th>
                <Th>Estado</Th>
              </Tr>
            </Thead>
            <Tbody>
              {orders.map((order) => (
                <Tr key={order.id}>
                  <Td>{order.id}</Td>
                  <Td>{order.name}</Td>
                  <Td>{order.product}</Td>
                  <Td>{order.quantity}</Td>
                  <Td>{order.address}</Td>
                  <Td>{order.phone}</Td>
                  <Td>{order.email}</Td>
                  <Td>{order.deliveryDate}</Td>
                  <Td>{order.paymentMethod}</Td>
                  <Td>
                  <Button
  colorScheme={order.status === "Pendiente" ? "yellow" : "green"}
  size="xs"
  onClick={() => handleStatusChange(order.id)}
>
  {order.status}
</Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}
    </Container>
  );
}
