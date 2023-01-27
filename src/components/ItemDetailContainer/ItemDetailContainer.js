import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import { pedirItemPorId } from "../../helpers/dataRequest"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { doc, getDoc} from "firebase/firestore"
import { db } from "../../firebase/config"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const {itemId} = useParams()

    useEffect(() => {
        // pedirItemPorId(parseInt(itemId))
        // .then((data) => {
        //     setItem(data)
        // })
        // .catch(error => {
        //     console.log(error)
        // })
        //referencia
        const docRef = doc(db, 'productos', itemId)
        //peticion async
        getDoc(docRef)
            .then((doc)=>
            setItem({...doc.data(), id: doc.id}
            ))

    }, [itemId])

    return(
        <div className="item-detail-container">
            {item && 
            <ItemDetail {...item} />
            }
        </div>
    )
}

export default ItemDetailContainer