import './ItemListContainer.css';

const ItemListContainer = (greeting) => {
    greeting = 'Bienvenido a nuestra tienda online!';

    return (
    <div className="item-list-container">
        <h1 style={{color:'#423f32', fontFamily: 'roboto', fontWeight: 'lighter',fontSize: '1.1vw'}}>
            {greeting}
        </h1>
    </div>
    )

}

export default ItemListContainer;