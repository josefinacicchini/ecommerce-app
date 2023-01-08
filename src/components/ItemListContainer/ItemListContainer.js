import { useEffect, useState } from 'react';
import { pedirDatos } from '../../helpers/dataRequest';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])
   
    useEffect(()=>{
        pedirDatos()
            .then((res)=>{
                setProductos(res)
            })
            .catch((err)=> {
                console.log(err)
            })
    }, [])

    return (
        <div className="item-list-container">
            <ItemList productos={productos}/>
        </div>
    )

}

export default ItemListContainer;