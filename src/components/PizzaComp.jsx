import React, { useContext } from 'react';
import Context from "../Context/Context"
import { useParams } from 'react-router-dom';
import { CiPizza } from "react-icons/ci";

export default function Navigation() {

    const { menu, setMenu } = useContext(Context);
    const { id } = useParams();

    const option={
        style: 'decimal',
        currency: 'CLP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0}
        


    const pizzaSola = menu.filter(num => num.id.toString() === id.toString());

    const aumenta = (id, cantidad) => {
        const nuevosDatos = menu.map((dato) =>
            dato.id === id ? { ...dato, cantidad: cantidad + 1 } : dato
        );
        setMenu(nuevosDatos);
        console.log('Button clicked', id, cantidad);
    };


    const imprimir = () => {
        const arreglo =
            pizzaSola.map((pizza) => (
                <div key={pizza.id} className="d-flex flex-wrap justify-content-center">
                    <div className="col-12 col-sm-8 col-md-8 col-lg-6 mb-3 p-2">
                        <div className="card mb-3 h-100">
                            <img 
                                className="card-img-botton h-100"
                                src={pizza.image}
                                alt={pizza.name}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-md-4  col-lg-6 mb-3 p-2">
                        <div className="card mb-3 h-100 ">
                            <div className="card-body ">
                                <h5 className="card-title  ">{pizza.name}</h5>
                                <p className="card-text izquierda">{pizza.description}</p>
                                <p className="card-text izquierda">Ingredientes:</p>
                                <ul className="list-group list-group-flush ">
                                    {pizza.ingredients.map((ingredient) => (
                                        <li key={ingredient} className="izquierdas list-group-item ">
                                            <span className='text-warning'><CiPizza /></span>{ingredient}
                                        </li>
                                    ))}
                                </ul>
                                <p className="card-text precio">Precio: {pizza.price.toLocaleString('es-CL', option)} <button onClick={() => aumenta(pizza.id, pizza.cantidad)} className="btn btn-danger m-2">Añadir</button></p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            ));
        return arreglo;
    }
    return (
        <>
            {imprimir()}
        </>
    );
}