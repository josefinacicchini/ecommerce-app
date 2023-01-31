import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/Cart/Cart";
import CheckOut from "../components/CheckOut/CheckOut";
import { Route, Routes, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    return (
        <>
          <NavBar />
            
          <Routes>
            <Route path="/" element={ <ItemListContainer /> } />
            <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
            <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
            <Route path="/cart" element={ <Cart /> }/>
            <Route path="/checkout" element={ <CheckOut /> }/>
            <Route path="*" element={ <Navigate to='/'/> }/>
          </Routes>
            
        </> 
    )
}

export default PrivateRoutes 