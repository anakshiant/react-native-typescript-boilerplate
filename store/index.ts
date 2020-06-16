import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { State } from "./types";

import * as dishes from "./reducers/dish";
import * as cart from "./reducers/cart";

const middelwares = applyMiddleware(thunk);

const initialState: State = {
  dishes: dishes.initialState,
  cart: cart.initialState,
};

const reducer = combineReducers({
  dishes: dishes.handler,
  cart: cart.handler,
});

export const store = createStore(reducer, initialState, middelwares);
