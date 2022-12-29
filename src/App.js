import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = 'Bienvenido a nuestra tienda online!'/>
        <ItemCount />
    </div>
  );
}

export default App;
