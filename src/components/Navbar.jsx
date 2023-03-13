import { NavLink } from 'react-router-dom';
import { Navbar, Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { FaPizzaSlice,FaShoppingCart } from "react-icons/fa";
import Context from "../Context/Context"
import React, {  useEffect, useContext } from 'react';
export default function Navigation() {

  
  const { menu, total, setTotal, option} = useContext(Context);

  function calcularTotal() {
    const totalCalculado = menu.reduce(
      (acc, item) => acc + (parseFloat(item.price) ?? 0) * (parseInt(item.cantidad) ?? 0),
      0
    );
    setTotal(totalCalculado);
  }

  useEffect(() => {
    calcularTotal();
  });
 console.log(total);

  return (
    <>
      <Navbar className="fondo" variant="light">
        <Container className="justify-content-start">
          <Nav className="me-auto">
          <NavLink to="/" activeclassname="active" className="text-white ms-3 text-decoration-none">
              <FaPizzaSlice />Pizzería Mama Mía
            </NavLink>
          </Nav>
          <Nav className="justify-content">
            <NavLink to="/carrito" activeclassname="active" className="text-white ms-3 text-decoration-none">
            <FaShoppingCart />Carro ${total.toLocaleString('es-CL', option)}
            </NavLink>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}
