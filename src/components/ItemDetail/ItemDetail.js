import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import { useNavigate } from "react-router-dom"

const ItemDetail = ({item}) => {
    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div className="item-detail">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p className="description">{item.description}</p>
            <p>Categoría: {item.category}</p>
            <h3>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'ARS'}).format(item.price)}</h3>
            
            <ItemCount item={item} />

            <button className='return-button' onClick={handleVolver}>Volver</button>
        </div>
        
    )

}

export default ItemDetail