import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./components/Error404/Error404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <NavBar />
        
        <Routes>
          <Route path="/" element={ <ItemListContainer /> } />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
          <Route path="*" element={ <Error404/> }/>

        </Routes>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
