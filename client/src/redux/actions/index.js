import axios from "axios";
import { FETCH_USER, LOADING_START, LOADING_STOP } from "./types";

export const loadingStart = () => {
  return {
    type: LOADING_START
  };
};

export const loadingStop = () => {
  return {
    type: LOADING_STOP
  };
};

export const fetchUser = () => async dispatch => {
  dispatch(loadingStart());
  const response = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: response.data });
  dispatch(loadingStop());
};
