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
    default:
      return { ...state };
  }
};

export default BurgerReducer;
