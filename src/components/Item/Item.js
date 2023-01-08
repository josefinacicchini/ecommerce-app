import './Item.css';

const Item = ({name,image,price}) => {
    return (
        <div className="item">
                <img src={image} alt={name}/>
                <p>{name}</p>
                <h4>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'ARS'}).format(price)}</h4>

        </div>
    )
}

export default Item