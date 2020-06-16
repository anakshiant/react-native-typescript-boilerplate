import { Dispatch } from "redux";
import { Action } from "../types";
import { dishes } from "../../dummy";

export const getDishes = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: "DISHES_GET_SUCCESS", dishes });
};
