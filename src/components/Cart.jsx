import React, { Component } from "react";

import { connect } from "react-redux";

class Cart extends Component {
  renderBill = () => {
    return this.props.burger.map((burger, index) => {
      return (
        <tr key={index}>
          <td>{burger.name}</td>
          <td>
            <button
              style={{ width: 35, height: 35 }}
              className="btn btn-success mr-2 "
              onClick={() => {}}
            >
              <span className="button-center">+</span>
            </button>
            {burger.amount}
            <button
              style={{ width: 35, height: 35 }}
              className="btn btn-danger  ml-2"
              onClick={() => {}}
            >
              -
            </button>
          </td>
          <td>{this.props.menu[burger.name]}</td>
          <td>
            {(burger.amount * this.props.menu[burger.name]).toLocaleString()}
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="cart">
        <h3 className="cart__title text-center text-success my-4">Chọn thức ăn</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Thức ăn</th>
              <th>Số lượng</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>{this.renderBill()}</tbody>
          <tfoot>
            <td></td>
            <td></td>
            <td className="sumMoney">Tổng cộng: </td>
            <td className="sumMoney"></td>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};
export default connect(mapStateToProps)(Cart);
