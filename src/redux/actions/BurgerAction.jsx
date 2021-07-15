import { TANG_GIAM } from "../types/BurgerType";

export const addBurgerMid = (name, isTrue) => {
  return {
    type: TANG_GIAM,
    name,
    isTrue,
  };
};
