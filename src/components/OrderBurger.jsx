import React, { Component } from "react";

import Burger from "./Burger";
import Cart from "./Cart";

export default class OrderBurger extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h3 className="display-4 text-success mt-5">
            Bài tập burger cybersoft
          </h3>
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
}
