import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from "./Containers/Header";
import ProductLsting from "./Containers/ProductLsting";
import ProductDetails from "./Containers/ProductDetails";

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route eact path="/" element={<ProductLsting />}></Route>
          <Route path="/product/:productId" element={<ProductDetails />} />

          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
