import "../App.css";

import React, { Component } from "react";

import { connect } from "react-redux";

class Burger extends Component {
  renderBreadMid = () => {
    return this.props.burger.map((burger, index) => {
      let result = [];
      for (let i = 0; i < burger.amount; i++) {
        result.push(<div key={index} className={burger.name}></div>);
      }
      return result;
    });
  };
  render() {
    return (
      <div className="burger">
        <h3 className="burger__title text-danger mt-5 text-center">Bánh burger của bạn</h3>
        <div className="breadTop"></div>
        {this.renderBreadMid()}
        <div className="breadBottom "></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
  };
};
export default connect(mapStateToProps)(Burger);
