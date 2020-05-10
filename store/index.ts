import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { State } from "./types";

import * as auth from "./reducers/authReducer";

const middelwares = applyMiddleware(thunk);

const initialState: State = {
  auth: auth.initialState,
};

const reducer = combineReducers({
  auth: auth.handler,
});

export const store = createStore(reducer, initialState, middelwares);

