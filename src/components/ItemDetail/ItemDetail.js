import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

// const ItemDetail = ({id, name, image, description, price}) => {
const ItemDetail = ({item}) => {
    return (
        <div className="item-detail">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Categoría: {item.category}</p>
            <h3>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'ARS'}).format(item.price)}</h3>
            
            <ItemCount item={item} />
        </div>
        
    )

}

export default ItemDetail