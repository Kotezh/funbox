import { MOVE_CENTER } from "../actions/action-types";

const defaultCenter = {
  lat: 55.7533818,
  lng: 37.6218572,
};

const initialStateCenter = {
  ...defaultCenter,
};

export const centerReducer = (state = initialStateCenter, action) => {
  switch (action.type) {
    case MOVE_CENTER:
      return {
        lat: action.lat,
        lng: action.lng,
      };

    default:
      return state;
  }
};
