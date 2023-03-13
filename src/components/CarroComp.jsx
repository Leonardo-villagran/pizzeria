import React, { useContext } from 'react';
import Context from "../Context/Context"
import { CiPizza } from "react-icons/ci";

export default function Navigation() {

    const { menu, setMenu, total, option } = useContext(Context);

    const aumentarCantidad = (id, cantidad) => {
        const nuevosDatos = menu.map((dato) =>
            dato.id === id ? { ...dato, cantidad: cantidad + 1 } : dato
        );
        setMenu(nuevosDatos);
        console.log('Button clicked', id, cantidad);
    }
    const disminuirCantidad = (id, cantidad) => {
        const nuevosDatos = menu.map((dato) =>
            dato.id === id ? { ...dato, cantidad: cantidad - 1 } : dato
        );
        setMenu(nuevosDatos);
        console.log('Button clicked', id, cantidad);
    }

    const imprimir_carro = () => {
        const arreglo = menu.map((pizza, index) => (pizza.cantidad > 0 ?

            <tr key={index}>
                <td className='p-1'><img
                    className="card-img-top"
                    src={pizza.image_100}
                    alt={pizza.name}
                />
                </td>
                <td><span className='text-warning'><CiPizza /></span>{pizza.name}</td>

                <td>$ {(pizza.price * pizza.cantidad).toLocaleString('es-CL', option)}</td>
                <td><button className="btn btn-danger m-2" onClick={() => disminuirCantidad(pizza.id, pizza.cantidad)}>-</button> </td>
                <td>  {pizza.cantidad}</td>
                <td> <button className="btn btn-primary m-2" onClick={() => aumentarCantidad(pizza.id, pizza.cantidad)}>+</button></td>

            </tr>
            : null));
        return arreglo;
    }

    return (
        <div>
             <p className='display-6 text-white text-center'>Detalles del pedido:</p>
            <div className='abs-center'>
                <div className='card'>
                <table className='text-center'>
                    <thead>
                        <tr>
                            <th width="20%"></th><th width="40%"></th ><th width="20%"></th><th width="5%"></th ><th width="10%"></th><th width="5%"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {imprimir_carro()}
                    </tbody>
                </table>
                </div>
            </div>
            <p className='total text-white text-center'>Total: $ {total.toLocaleString('es-CL', option)}</p>
            <div className='text-center'>
            <button className="btn btn-success m-2"><span>Ir a pagar</span></button>
            </div>
        </div>
    );
}