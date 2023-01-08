import { useEffect, useState } from "react"
import { pedirItemPorId } from "../../helpers/dataRequest"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'

const ItemDetailContainer = ({itemId}) => {
    const [item, setItem] = useState([])
    console.log(item)

    useEffect(() => {
        pedirItemPorId(parseInt(itemId))
        .then((data) => {
            setItem(data)
        })
        .catch(error => {
            console.log(error)
        })

    }, [itemId])

    return(
        <div className="item-detail-container">
            {item && 
            <ItemDetail item={item} />
            }
        </div>
    )
}

export default ItemDetailContainer