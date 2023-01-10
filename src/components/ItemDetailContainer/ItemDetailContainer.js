import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirItemPorId } from "../../helpers/dataRequest"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const {itemId} = useParams()

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