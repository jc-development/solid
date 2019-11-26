import {
  FETCH_BROADHEAD_REQUESTED,
  FETCH_BROADHEAD_SUCCESS,
  FETCH_BROADHEAD_FAILED
} from './actions';

const initialState = {};

const broadheadModelReducer = (previousState = initialState, { type, broadhead }) => {
  switch (type) {
    case FETCH_BROADHEAD_SUCCESS:
      return broadhead;

    case FETCH_BROADHEAD_FAILED:
      return broadhead;

    default:
      return previousState;
  }
};

export default broadheadModelReducer;
