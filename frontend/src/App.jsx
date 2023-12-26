
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Addproduct from "./components/Addproduct";
import Editproduct from "./components/Editproduct";
import "./App.css";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route
            element={ <ProductList />}
            path="/"
          />
            <Route
            element={ <Addproduct />}
            path="/add"
          />
           <Route
            element={ <Editproduct />}
            path="/edit/:id"
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
