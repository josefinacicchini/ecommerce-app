import { useEffect, useState } from 'react';
// import { pedirDatos } from '../../helpers/dataRequest';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()
   
    useEffect(()=>{
        // pedirDatos()
        //     .then((res)=>{
        //         if(categoryId) {
        //         setProductos(res.filter(prod => prod.category === categoryId))
        //         } else {
        //             setProductos(res)
        //         }
        //     })
        //     .catch((err)=> {
        //         console.log(err)
        //     })

        //referencia a la base de datos
        const productosRef = collection(db, "productos")
        const q = categoryId
                    ? query(productosRef, where("category", "==", categoryId))
                    : productosRef
        //peticion asincronica
        
        getDocs(q)
            .then((resp)=> {
                setProductos(resp.docs.map((doc)=> {
                    return { 
                        ...doc.data(), 
                        id: doc.id
                    }
                }))
            })



    }, [categoryId])

    return (
        <div className="item-list-container">
            <ItemList productos={productos}/>
        </div>
    )

}

export default ItemListContainer;