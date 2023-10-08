import logo from "./logo.svg";
import "./App.css";
import products from "./products";

function App() {
  const productsList = products.map((cake) => {
    return (
      <div className="card">
        <h1>{cake.image}</h1>
        <h4>{cake.name}</h4>
        <h6>{cake.price}</h6>
      </div>
    );
  });
  return (
    <div className="App">
      <h1> Mariam's Bakery </h1>
      <h6> Welcome to My Bakery </h6>
      <img
        src="https://www.mashed.com/img/gallery/the-best-bakery-in-every-state/intro-1601499029.jpg"
        width="600"
        height="400"
      ></img>
      <div className="container">{productsList}</div>
    </div>
  );
}

export default App;
