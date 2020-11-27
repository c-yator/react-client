import { SET_RESPONSE, CLEAR_RESPONSE } from "../types";

const initialState = {
  errorId: null,
  message: "",
};

const responseReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_RESPONSE:
      return {
        ...state,
        errorId: payload.errorId,
        message: payload.message,
      };
    case CLEAR_RESPONSE:
      return {
        ...state,
        errorId: null,
        message: "",
      };
    default:
      return state;
  }
};

export default responseReducer;
