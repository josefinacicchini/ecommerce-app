import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({id,name,stock,category,image,description,price}) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1);
    
    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const item = {
            id,
            name,
            stock,
            category, 
            image, 
            description, 
            price,
            cantidad
        };
        agregarAlCarrito(item)
        console.log(item)

    };

    return (
        <div className="item-detail">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p className="description">{description}</p>
            <p>Categoría: {category}</p>
            <h3>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'ARS'}).format(price)}</h3>
            
            {
                !isInCart(id)
                ? <ItemCount 
                    cantidad={cantidad}
                    stock={stock}
                    setCantidad={setCantidad} 
                    onAdd = {handleAgregar}
                    />
                : <Link to="/cart" >Terminar mi compra</Link>
            }


            

            <button className='return-button' onClick={handleVolver}>Volver</button>
        </div>
        
    )

}

export default ItemDetail