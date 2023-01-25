import './LoginScreen.css'
import { useState, useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
    const { login, user } = useContext(LoginContext)

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
        login(values)
    }

    return (
        <div className='login-screen'>
            <div className='login-form-container'>
                <h2>Login</h2>
                <form className='login-form' onSubmit={handleSubmit}>
                    <input 
                        className='form-input' 
                        type={'email'} 
                        value={values.email} 
                        onChange={handleInputChange}
                        name='email'  
                    />
                    <input 
                        className='form-input' 
                        type={'password'} 
                        value={values.password} 
                        onChange={handleInputChange}
                        name='password'
                    />
                    <button className='login-form-button'>Ingresar</button>

                    { user.error && <p className='error'>{user.error}</p>}

                </form>
                <Link to='/register'>Registrarme</Link>
            </div>
        </div>
    )
}

export default LoginScreen