import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { ThunkDispatch } from "redux-thunk";

export type Category = "Starter" | "Main Course" | "Dessert" | "Drinks";

export const categories: Category[] = [
  "Starter",
  "Main Course",
  "Dessert",
  "Drinks",
];

export type Dish = {
  id: string;
  name: string;
  info: string;
  price: number;
  category: Category;
};

export type State = {
  dishes: Record<string, Dish>; // dish id > Dish
  cart: Record<string, number>; // dish id  > quanitty
};

// since there are no network requests just add them directly
// unless we should have processing, error keys

export type Action =
  | { type: "DISHES_GET_SUCCESS"; dishes: Dish[] }
  | { type: "CART_ITEM_ADD"; dishId: string }
  | { type: "CART_ITEM_REMOVE"; dishId: string };

// https://app.gethyperdoc.com/t/ggX26ODro8oRVAOUnaZ3
export const useSelector: TypedUseSelectorHook<State> = useReduxSelector;

// https://app.gethyperdoc.com/t/kcpLtsvaAu8Pm3I83B3o
export type Dispatch = ThunkDispatch<State, any, Action>;
export function useDispatch(): Dispatch {
  return useReduxDispatch();
}
