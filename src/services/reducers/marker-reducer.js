import {
  CREATE_MARKER,
  DELETE_MARKER,
  DRAG_AND_DROP,
  CHANGE_POSITION,
  CLEAR_ALL_MARKERS,
} from "../actions/action-types";

const initialStateMarkers = {
  markers: [],
};

export const markerReducer = (state = initialStateMarkers, action) => {
  switch (action.type) {
    case CREATE_MARKER:
      return {
        markers: [
          ...state.markers,
          {
            id: action.id,
            address: action.address,
            position: action.position,
          },
        ],
      };

    case DELETE_MARKER:
      return {
        markers: state.markers.filter((marker) => marker.id !== action.id),
      };

    case DRAG_AND_DROP:
      const markers = [...state.markers];
      const fromItem = markers.splice(action.fromIndex, 1)[0];
      markers.splice(action.toIndex, 0, fromItem);
      return { markers };

    case CHANGE_POSITION:
      return {
        markers: state.markers.map((marker) => {
          if (marker.id === action.id) {
            return {
              ...marker,
              address: action.address,
              position: action.position,
            };
          }
          return marker;
        }),
      };

    case CLEAR_ALL_MARKERS:
      return initialStateMarkers;

    default:
      return state;
  }
};
