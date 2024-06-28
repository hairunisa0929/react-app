import { ADD_USER_DATA } from "../types";

export const addUser = (payload) => ({
  type: ADD_USER_DATA,
  payload,
});
