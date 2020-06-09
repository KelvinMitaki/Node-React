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
  try {
    dispatch(loadingStart());
    const response = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: response.data });
    dispatch(loadingStop());
  } catch (error) {
    dispatch(loadingStop());
    console.log(error);
  }
};

export const handleToken = token => async dispatch => {
  try {
    dispatch(loadingStart());
    const res = await axios.post("/api/stripe", token);
    dispatch({ type: FETCH_USER, payload: res.data });
    dispatch(loadingStop());
  } catch (error) {
    dispatch(loadingStop());
    console.log(error);
  }
};
