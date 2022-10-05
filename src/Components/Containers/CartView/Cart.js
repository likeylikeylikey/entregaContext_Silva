import React, {useContext} from 'react'
import { Context } from "../../../Context/CustomContext";
import { Link } from "react-router-dom";


export const Cart = ({ condicion, estilo }) => {
    const { cart } = useContext(Context);

    return (
        <>
            {cart.length === 0 ? (
                <>
                    <h1 className={condicion ? "rojo" : "azul"}>
                        ¡No existen productos!, puedes ver <Link to="/">acá</Link>
            </h1>
            <h2 className={`tamanio ${estilo || ''}`}>
                ¡Gracias por visitarnos!
            </h2>
        </>
        ) : (
        <>
            {cart.map((producto) => {
                return <h1 key={producto.id}>{producto.title}</h1>;
            })}
        </>
        )}
    </>
);
};

export default Cart