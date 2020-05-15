import { Action, BaseState, PhotoState } from "../types";

export const initialState: BaseState<PhotoState> = {
  processing: false,
  data: {
    photos: {
      photo: [],
      page: 0,
      perPage: 0,
      pages: 0,
      total: 0,
    },
    previousSearches: [],
    gridType: 2,
    currentSearch: "",
  },
};

export const handler = (
  state: BaseState<PhotoState> = initialState,
  action: Action
): BaseState<PhotoState> => {
  switch (action.type) {
    case "SEARCH_PHOTO_START":
      return {
        ...state,
        processing: true,
      };
    case "SEARCH_PHOTO_ERROR":
      return {
        ...state,
        processing: false,
        error: action.error,
      };
    case "SEARCH_PHOTO_SUCCESS":
      return {
        ...state,
        processing: false,
        data: {
          ...state.data,
          photos: {
            ...state.data.photos,
            photo: action.meta.append
              ? [...state.data.photos.photo, ...action.payload.photos.photo]
              : action.payload.photos.photo,
            page: action.payload.photos.page,
            pages: action.payload.photos.pages,
          },
        },
      };

    case "GET_PREVIOUS_SEARCH_ITEM_SUCCESS":
      return {
        ...state,
        processing: false,
        data: {
          ...state.data,
          photos: {
            ...state.data.photos,
            photo: action.payload,
          },
        },
      };
    case "SET_GRID_TYPE":
      return {
        ...state,
        data: {
          ...state.data,
          gridType: action.payload,
        },
      };
    case "SET_SEARCH":
      return {
        ...state,
        data: {
          ...state.data,
          currentSearch: action.payload,
        },
      };
    default:
      return state;
  }
};
