import { GET_DATA, GET_SINGLE_ITEM, LOADING } from "./types";
import axios from "axios";

export const getData = () => {
  return async (dispatch) => {
    try {
      setLoading(true);
      const res = await axios.get("https://reqres.in/api/users");
      dispatch({ type: GET_DATA, payload: res.data.data });
    } catch (err) {
      setLoading(false);
    }
  };
};

export const getSingleUser = (id) => {
  return async (dispatch) => {
    try {
      setLoading(true);
      const res = await axios.get(`https://reqres.in/api/users/${id}`);
      dispatch({ type: GET_SINGLE_ITEM, payload: res.data.data });
    } catch (err) {
      setLoading(false);
    }
  };
};

export const setLoading = (value) => {
  return (dispatch) => {
    dispatch({ type: LOADING, payload: value });
  };
};
