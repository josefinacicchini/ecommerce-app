import { useNavigate } from "react-router-dom"
import gif from "./sleeping-dog.gif"
import './Error404.css'

const Error404 = () => {
    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div className="error-message-container">
            <h1 className="title">404</h1>
            <h2 className="page-not-found">Page Not Found</h2>

            <img src={gif} alt="sleeping dog"/>

            <button className='return-button' onClick={handleVolver}>Volver</button>
                
        </div>
    )
}
export default Error404