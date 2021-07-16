import { TANG_GIAM } from "../types/BurgerType";

const burgerState = {
  burger: {
    salad: 1,
    cheese: 1,
    beef: 1,
  },
  // [
  //   { name: "salad", amount: 1 },
  //   { name: "cheese", amount: 1 },
  //   { name: "beef", amount: 1 },
  // ],
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
  total: 85,
};

export const BurgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case TANG_GIAM: {
      // Cách 1:
      // let index = state.burger.findIndex((item) => item.name === action.name);

      // if (action.isTrue) {
      //   newBurger[index].amount++;
      // } else if (newBurger[index].amount > 0) {
      //   newBurger[index].amount--;
      // }
      // // Tính tổng tiền
      // state.total = newBurger.reduce((total, item) => {
      //   return (total += item.amount * state.menu[item.name]);
      // }, 0);
      // state.burger = newBurger;
      // return { ...state };

      // Cách 2:
      let { propsBurger, amount } = action;
      if (amount === -1 && state.burger[propsBurger] < 1) {
        return { ...state };
      }
      let newBurger = { ...state.burger };

      newBurger[propsBurger] += amount;
      state.burger = newBurger;
      // Tính tổng tiền
      state.total += amount * state.menu[propsBurger];
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default BurgerReducer;
