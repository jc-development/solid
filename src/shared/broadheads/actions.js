export const FETCH_BROADHEAD_REQUESTED = 'FETCH_BROADHEAD_REQUESTED';
export const FETCH_BROADHEAD_SUCCESS = 'FETCH_BROADHEAD_SUCCESS';
export const FETCH_BROADHEAD_FAILED = 'FETCH_BROADHEAD_FAILED';

export const fetchBroadhead = (broadhead) => {

  return {
    type: FETCH_BROADHEAD_REQUESTED,
    payload: broadhead
  };
};

export const receiveBroadheadModel = () => {
  return {
    type: FETCH_BROADHEAD_SUCCESS,
    payload
  };
};
