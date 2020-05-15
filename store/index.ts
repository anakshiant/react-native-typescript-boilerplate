import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { State } from "./types";

import * as photo from "./reducers/photoReducer";

const middelwares = applyMiddleware(thunk);

const initialState: State = {
  photo: photo.initialState,
};

const reducer = combineReducers({
  photo: photo.handler,
});

export const store = createStore(reducer, initialState, middelwares);

