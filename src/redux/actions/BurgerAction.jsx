import { TANG_GIAM } from "../types/BurgerType";

export const tangGiam = (name, tangGiam) => {
  return {
    type: TANG_GIAM,
    name,
    tangGiam,
  };
};
