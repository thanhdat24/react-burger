import React, { Component } from "react";

import { addBurgerMid } from "../redux/actions/BurgerAction";
import { connect } from "react-redux";

const plusAmount = 1;
const minusAmount = -1;
class Cart extends Component {
  // renderBill = () => {
  //   return this.props.burger.map((item, index) => {
  //     return (
  //       <tr key={index}>
  //         <td>{item.name}</td>
  //         <td>
  //           <button
  //             style={{ width: 35, height: 35 }}
  //             className="btn btn-success mr-2 "
  //             onClick={() => {
  //               this.props.addBurgerMid(item.name, plusAmount);
  //             }}
  //           >
  //             <span className="button-center">+</span>
  //           </button>
  //           {item.amount}
  //           <button
  //             style={{ width: 35, height: 35 }}
  //             className="btn btn-danger  ml-2"
  //             onClick={() => {
  //               this.props.addBurgerMid(item.name, minusAmount);
  //             }}
  //           >
  //             -
  //           </button>
  //         </td>
  //         <td>{this.props.menu[item.name]}</td>
  //         <td>{(item.amount * this.props.menu[item.name]).toLocaleString()}</td>
  //       </tr>
  //     );
  //   });
  // };

  renderBill = () => {
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{propsMenu}</td>
          <td>
            <button
              style={{ width: 35, height: 35 }}
              className="btn btn-success mr-2 "
              onClick={() => {
                this.props.addBurgerMid(propsMenu, plusAmount);
              }}
            >
              <span className="button-center">+</span>
            </button>
            {burger[propsMenu]}
            <button
              style={{ width: 35, height: 35 }}
              className="btn btn-danger  ml-2"
              onClick={() => {
                this.props.addBurgerMid(propsMenu, minusAmount);
              }}
            >
              -
            </button>
          </td>
          <td>{price}</td>
          <td>{burger[propsMenu] * price.toLocaleString()}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="cart">
        <h3 className="cart__title text-center text-success my-4">
          Chọn thức ăn
        </h3>
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
            <tr>
              <td colSpan={2}></td>
              <td className="sumMoney">Tổng cộng: </td>
              <td className="sumMoney">{this.props.total.toLocaleString()}</td>
            </tr>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addBurgerMid: (propsBurger, amount) => {
      dispatch(addBurgerMid(propsBurger, amount));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
