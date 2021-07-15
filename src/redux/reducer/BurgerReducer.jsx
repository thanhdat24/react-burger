const burgerState = {
  burger: [
    { name: "salad", amount: 1 },
    { name: "cheese", amount: 1 },
    { name: "beef", amount: 1 },
  ],
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
  total: 85,
};

export const BurgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case "TANG_GIAM": {
      let newBurger = [...state.burger];
      let index = state.burger.findIndex((item) => item.name === action.name);

      if (action.isTrue) {
        newBurger[index].amount++;
      } else if (newBurger[index].amount > 0) {
        newBurger[index].amount--;
      }
      // Tính tổng tiền
      state.total = newBurger.reduce((total, item) => {
        return (total += item.amount * state.menu[item.name]);
      }, 0);
      state.burger = newBurger;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default BurgerReducer;
