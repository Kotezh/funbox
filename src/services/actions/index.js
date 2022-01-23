import {
  CREATE_MARKER,
  DELETE_MARKER,
  MOVE_CENTER,
  DRAG_AND_DROP,
  CHANGE_POSITION,
  CLEAR_ALL_MARKERS,
} from "../actions/action-types";

export const createMarker = (id, address, position) => ({
  type: CREATE_MARKER,
  id,
  address,
  position,
});

export const deleteMarker = (id) => ({
  type: DELETE_MARKER,
  id,
});

export const moveToCenter = (lat, lng) => ({
  type: MOVE_CENTER,
  lat,
  lng,
});

export const dragAndDrop = (fromIndex, toIndex) => ({
  type: DRAG_AND_DROP,
  fromIndex,
  toIndex,
});

export const changePosition = (id, address, position) => ({
  type: CHANGE_POSITION,
  id,
  address,
  position,
});

export const clearAllMarkers = () => ({
  type: CLEAR_ALL_MARKERS,
});
