import { TANG_GIAM } from "../types/BurgerType";

export const addBurgerMid = (propsBurger, amount) => {
  return {
    type: TANG_GIAM,
    propsBurger,
    amount,
  };
};
