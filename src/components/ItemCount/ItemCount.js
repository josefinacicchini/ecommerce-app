import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({item}) => {
    const [count, setCount] = useState(0);
    

    const agregar = () =>{
        count<item.stock && setCount(count+1)
        
    };
    const quitar = () => {
        count >= 1 && setCount(count-1)

    };

    return (
        <div className="item-count-container">
            <p>Agregar productos</p>
            <div className="counter">
                <button onClick={quitar}>
                    -
                </button>
                <p className="counter-display">{count}</p>
                <button onClick={agregar}>
                    +
                </button>
            </div>
            <p>Disponibles: {item.stock}</p>
        </div>
    )
}


export default ItemCount;