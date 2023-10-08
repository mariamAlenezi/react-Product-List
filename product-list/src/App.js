import logo from "./logo.svg";
import "./App.css";
import products from "./products";
import Home from "./components/Home";
import ProductList from "./components/ProductList";

function App() {
  // const productsList = products.map((cake) => {
  //   return (
  //     <div className="card">
  //       <h1>{cake.image}</h1>
  //       <h4>{cake.name}</h4>
  //       <h6>{cake.price}</h6>
  //     </div>
  //   );
  // });
  return (
    <div className="App">
      <Home />
      <div className="container">
        <ProductList />
      </div>
    </div>
  );
}

export default App;
