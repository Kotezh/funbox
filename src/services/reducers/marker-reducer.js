import {
  CREATE_MARKER,
  DELETE_MARKER,
  DRAG_AND_DROP,
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
      const fromMarker = markers.splice(action.fromIndex, 1)[0];
      markers.splice(action.toIndex, 0, fromMarker);

      return { markers };

    case CLEAR_ALL_MARKERS:
      return initialStateMarkers;

    default:
      return state;
  }
};
