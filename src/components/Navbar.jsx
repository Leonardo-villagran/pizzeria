import { NavLink } from 'react-router-dom';
import { Navbar, Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { FaPizzaSlice,FaShoppingCart } from "react-icons/fa";
import Context from "../Context/Context"
import React, {  useEffect, useContext } from 'react';
export default function Navigation() {

  const option={
    style: 'decimal',
    currency: 'CLP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0}
    

  const { menu, total, setTotal} = useContext(Context);

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

  let valor=0;
  if (total) valor=total;
  else valor=0;

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "mi-clase");

  return (
    <>
      <Navbar className="fondo" variant="light">
        <Container className="justify-content-start">
          <Nav className="me-auto">
          <NavLink to="/"className={setActiveClass} >
              <FaPizzaSlice />Pizzería Mama Mía
            </NavLink>
          </Nav>
          <Nav className="justify-content">
            <NavLink to="/carrito"  className={setActiveClass} >
            <FaShoppingCart />Carro ${valor.toLocaleString('es-CL', option)}
            </NavLink>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}
