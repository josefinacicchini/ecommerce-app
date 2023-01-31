import './CheckOut.css'
import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { CartContext } from '../../context/CartContext'
import { db } from '../../firebase/config'
import { collection, addDoc } from 'firebase/firestore'


const CheckOut = () => {
    const {cart, totalAmount, emptyCart} = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)

    const [values,setValues] = useState({
        nombre:'',
        direccion: '',
        email:''
    })
    const handleInputChange = (e)=> {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(values)
        const order = {
            client: values,
            items: cart,
            total: totalAmount(),
            date: new Date()
        }
        const ordersRef = collection(db, 'orders')

        addDoc(ordersRef, order)
            .then((doc)=> {
                setOrderId(doc.id)
                emptyCart()
            })
            .catch((error)=> console.log(error))
    }

    if(orderId) {
        return (
            <div className=''>
                <h2>Tu compra ha sido exitosa</h2>
                <p> Tu código de compra es: {orderId}</p>
                <Link to='/'>Volver</Link>
            </div>
        )
    }

    if(cart.length === 0) {
        return < Navigate to='/'/>
    }


    return(
        <div>
            <h2>Terminar mi compra</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleInputChange} 
                    type='text' 
                    name='nombre' 
                    value={values.nombre} 
                    placeholder='Tu nombre'
                />
                <input 
                    onChange={handleInputChange} 
                    type='text' 
                    name='direccion' 
                    value={values.direccion} 
                    placeholder='Dirección'
                />
                <input 
                    onChange={handleInputChange} 
                    type='email' 
                    name='email' 
                    value={values.email} 
                    placeholder='Tu email'
                />
                <button>Enviar</button>

            </form>

        </div>
    )
}

export default CheckOut