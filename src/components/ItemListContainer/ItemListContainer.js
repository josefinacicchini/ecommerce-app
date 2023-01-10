import { useEffect, useState } from 'react';
import { pedirDatos } from '../../helpers/dataRequest';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';


const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()
    console.log(categoryId)
   
    useEffect(()=>{
        pedirDatos()
            .then((res)=>{
                if(categoryId) {
                setProductos(res.filter(prod => prod.category === categoryId))
                } else {
                    setProductos(res)
                }
            })
            .catch((err)=> {
                console.log(err)
            })
    }, [categoryId])

    return (
        <div className="item-list-container">
            <ItemList productos={productos}/>
        </div>
    )

}

export default ItemListContainer;