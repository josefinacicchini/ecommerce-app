import { useState } from "react";

const ItemCount = () => {
    const [count, setCount] = useState(0);
    

    const agregar = () =>{
        count<stock && setCount(count+1)
        
    };
    const quitar = () => {
        count >= 1 && setCount(count-1)

    };

    const stock = 10;

    return (
        <div>
            <p>Producto</p>
            <button onClick={agregar}>
                +
            </button>
            <p>{count}</p>
            <button onClick={quitar}>
                -
            </button>
            <p>Disponibles: {stock}</p>
        </div>
    )
}


export default ItemCount;