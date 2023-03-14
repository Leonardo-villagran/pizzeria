import React, { useContext } from 'react';
import Context from "../Context/Context"
import { useNavigate } from "react-router-dom";
import { CiPizza } from "react-icons/ci";

export default function Navigation() {
    //Desestructuración global de datos.
    const { menu, setMenu } = useContext(Context);

    const option={
        style: 'decimal',
        currency: 'CLP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0}
        
    const navigate = useNavigate();

    const handlePizzaClick = (id) => {
        navigate(`/pizza/${id}`);
    };

    const aumenta = (id, cantidad) => {
        const nuevosDatos = menu.map((dato) =>
            dato.id === id ? { ...dato, cantidad: cantidad + 1 } : dato
        );
        setMenu(nuevosDatos);
    };
    console.log("Menu: ", menu);
    return (
        <div className="container">

            <div className="d-flex flex-wrap justify-content-center">
                {menu.map((pizza) => (
                    <div key={pizza.id} className="col-md-4 p-1">
                        <div className="card bg bg-white h-100">
                            <img
                                className="card-img-top"
                                src={pizza.image_500}
                                alt={pizza.name}
                            />
                            <div className="card-body ">
                                <h5 className="card-title izquierda ">{pizza.name}</h5>

                                <p className="card-text izquierda">Ingredientes:</p>
                                <ul className="list-group list-group-flush ">
                                    {pizza.ingredients.map((ingredient) => (
                                        <li key={ingredient} className="izquierdas list-group-item ">
                                            <span className='text-warning'><CiPizza/></span>{ingredient}
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