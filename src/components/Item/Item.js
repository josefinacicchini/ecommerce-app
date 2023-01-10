import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({name,image,price,id}) => {
    return (
        <div className="item">
                <img src={image} alt={name}/>
                <p className='product-name'>{name}</p>
                <h4>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'ARS'}).format(price)}</h4>
                <Link className="link-to-detail" to={`/detail/${id}`}>Ver más</Link>
        </div>
    )
}

export default Item