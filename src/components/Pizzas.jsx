import React, { useContext } from 'react';
import Context from "../Context/Context"
import { useNavigate } from "react-router-dom";
import { CiPizza } from "react-icons/ci";

export default function Navigation() {
    //Desestructuración global de datos.
    const { menu, setMenu } = useContext(Context);

    //Constante que define las opciones para pasar un número a latino CLP. 
    const option={
        style: 'decimal',
        currency: 'CLP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0}
        
    const navigate = useNavigate();

    //Función para navegar a una pizza en particular en caso de seleccionar una del menú.
    const handlePizzaClick = (id) => {
        navigate(`/pizza/${id}`);
    };

    //Función que permite aumentar la cantidad de pizza seleccionada en 1. 
    const aumenta = (id, cantidad) => {
        const nuevosDatos = menu.map((dato) =>
            dato.id === id ? { ...dato, cantidad: cantidad + 1 } : dato
        );
        setMenu(nuevosDatos);
    };
    return (
        <div className="container">

            <div className="d-flex flex-wrap justify-content-center ">
                {menu.map((pizza) => (
                    <div key={pizza.id} className="col-sm-6 col-md-4 col-lg-3 p-1 ">
                        <div className="card bg bg-white h-100 ">
                            <img
                                className="card-img-top"
                                src={pizza.image_500}
                                alt={pizza.name}
                            />
                            <div className="card-body cardbody">
                                <h5 className="card-title izquierda ">{pizza.name}</h5>

                                <p className="card-text izquierda">Ingredientes:</p>
                                <ul className="list-group list-group-flush ">
                                    {pizza.ingredients.map((ingredient) => (
                                        <li key={ingredient} className="izquierdas list-unstyled" >
                                            <span className='text-danger'><CiPizza/></span>{ingredient}
                                        </li>
                                    ))}
                                </ul>
                                <p className="card-text precio">$ {pizza.price.toLocaleString('es-CL', option)}</p>
                                <button className="btn btn-primary m-2" onClick={() => handlePizzaClick(pizza.id)}>Ver más</button><button onClick={() => aumenta(pizza.id, pizza.cantidad)} className="btn btn-danger m-2">Añadir</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}