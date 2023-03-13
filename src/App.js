import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Footer from "./views/Footer";
import Carro from "./views/Carro";
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./Context/Context";
import Pizza from "./views/Pizza";

function App() {

  const [menuData, setMenuData] = useState([]);
  const [menu, setMenu] = useState([]);
  const [total, setTotal] = useState();


  async function fetchlist() {
        const response = await fetch("https://raw.githubusercontent.com/Leonardo-villagran/listaPizzas/main/lista.json");
        const data = await response.json();
        setMenuData(data);
    }

  useEffect(() => {
    
    fetchlist();
  }, []);

  useEffect(() => {
    const nueva = menuData.map((producto) => ({
      id: producto.id,
      name: producto.name,
      price: producto.price,
      image: producto.image,
      image_500: producto.image_500,
      image_100: producto.image_100,
      description: producto.description,
      ingredients: producto.ingredients,
      cantidad:0,
      total:0
    }));
    setMenu(nueva);
  }, [menuData]);

  //Generación de la estados globales.
  const globalState = { menu, setMenu, total, setTotal};

  console.log(menu);
  return (
    <div>
      <Context.Provider value={globalState}>
      <BrowserRouter basename='/pizzeria'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carro />} />
            <Route path="/pizza/:id" element={<Pizza/>} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
