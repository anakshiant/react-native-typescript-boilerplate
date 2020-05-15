import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Photos, FlickrResponse, Photo } from "../services/flickr/dto";

export type GridType = 2 | 3 | 4;

export type PhotoGrid = Photo[][];

export type PhotoState = {
  photos: Photos;
  gridType: GridType;
  previousSearches: string[];
  currentSearch: string;
};

export type BaseState<T> = {
  error?: string;
  processing: boolean;
  data: T;
};

export type State = {
  photo: BaseState<PhotoState>;
};

export type Action =
  | {
      type: "SEARCH_PHOTO_START";
    }
  | {
      type: "SEARCH_PHOTO_SUCCESS";
      payload: FlickrResponse;
      meta: {
        append: boolean;
      };
    }
  | {
      type: "SEARCH_PHOTO_ERROR";
      error?: string;
    }
  | {
      type: "GET_PREVIOUS_SEARCH_ITEM_SUCCESS";
      payload: Photo[];
    }
  | {
      type: "SET_GRID_TYPE";
      payload: GridType;
    }
  | {
      type: "SET_SEARCH";
      payload: string;
    };

// https://app.gethyperdoc.com/t/ggX26ODro8oRVAOUnaZ3
export const useSelector: TypedUseSelectorHook<State> = useReduxSelector;

// https://app.gethyperdoc.com/t/kcpLtsvaAu8Pm3I83B3o
export type Dispatch = ThunkDispatch<State, any, Action>;
export function useDispatch(): Dispatch {
  return useReduxDispatch();
}
