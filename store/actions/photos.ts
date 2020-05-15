import { Dispatch } from "redux";
import { Action } from "../types";
import { getPhotos } from "../../services/flickr";

export const searchPhotos = (text: string, pageNumber: number) => async (
  dispatch: Dispatch<Action>
) => {
  dispatch({ type: "SEARCH_PHOTO_START" });

  const response = await getPhotos(text, pageNumber);

  if (response.type === "success") {
    dispatch({
      type: "SEARCH_PHOTO_SUCCESS",
      payload: response.data,
      meta: { append: pageNumber > 1 },
    });
  } else {
    dispatch({ type: "SEARCH_PHOTO_ERROR", error: "Temporarly down" });
  }
};
