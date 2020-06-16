import { Action, Dish } from "../types";

export const initialState: Record<string, Dish> = {};

export const handler = (
  state: Record<string, Dish> = initialState,
  action: Action
): Record<string, Dish> => {
  switch (action.type) {
    case "DISHES_GET_SUCCESS":
      return {
        ...state,
        ...action.dishes.reduce(
          (accumlator, current) => ({ ...accumlator, [current.id]: current }),
          {}
        ),
      };
    default:
      return state;
  }
};
