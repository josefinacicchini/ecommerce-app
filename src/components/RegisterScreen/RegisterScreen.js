import './RegisterScreen.css'
import logo from '../../img/brand-logo.png'
import { useState, useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
    const { user, register } = useContext(LoginContext)

    const [values, setValues]= useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        register(values)
    }

    return (
        <div className='register-screen'>
            <div className='register-form-container'>
                <div className='register-header'>
                    <img className='brand-logo' src={logo} alt="brand logo" />
                    <h3 className='pawsome-welcome'>Bienvenido a la tienda de Pawsome!</h3>
                </div>
                <p>Ingresa tus datos para registrarte:</p>
                <form className='register-form' onSubmit={handleSubmit}>
                    <input 
                        className='form-input' 
                        type={'email'} 
                        value={values.email} 
                        onChange={handleInputChange}
                        name='email'
                        Placeholder='Email'  
                    />
                    <input 
                        className='form-input' 
                        type={'password'} 
                        value={values.password} 
                        onChange={handleInputChange}
                        name='password'
                        Placeholder='Password'
                    />
                    <button className='register-form-button'>Registrarme</button>

                    { user.error && <p className='error'>{user.error}</p>}

                </form>
                <Link className='link-to-login' to='/login'>Ya estoy registrado</Link>
            </div>
        </div>
    )
}

export default RegisterScreen