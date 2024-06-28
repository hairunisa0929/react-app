import { ADD_USER_DATA } from "../types";

const initialState = {
  userData: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
