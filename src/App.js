import "./App.css";

import Burger from "./components/Burger";
import Cart from "./components/Cart";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3 className="display-4 text-success mt-5">Bài tập burger cybersoft</h3>
        <div className="row">
          <div className="col-7">
            <Burger />
          </div>
          <div className="col-5">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
