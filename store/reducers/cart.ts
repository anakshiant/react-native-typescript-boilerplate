import { Action } from "../types";

export const initialState: Record<string, number> = {};

export const handler = (
  state: Record<string, number> = initialState,
  action: Action
): Record<string, number> => {
  switch (action.type) {
    case "CART_ITEM_ADD":
      return {
        ...state,
        [action.dishId]: (state[action.dishId] || 0) + 1,
      };
    case "CART_ITEM_REMOVE":
      if (state[action.dishId] === 1) {
        const { [action.dishId]: value, ...rest } = state;
        return { ...rest };
      }
      return {
        ...state,
        [action.dishId]: state[action.dishId] - 1,
      };
    default:
      return state;
  }
};
