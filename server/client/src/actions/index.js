import axios from "axios";
import { CHECK_USER } from "./types";

const AUTH_URL = process.env.REACT_APP_AUTH_URL;
const ROOT_URL = process.env.REACT_APP_ROOT_URL;

export const fetchUser = () => async dispatch => {
  const res = await axios.get(`${ROOT_URL}/check_user`);

  dispatch({ type: CHECK_USER, payload: res.data });
};

export const googleAuth = () => async dispatch => {
  let testingAuth = "http://localhost:3000/auth/google";
  const res = await axios.get(testingAuth);
};

export const fbAuth = () => async dispatch => {
  const res = await axios.get(`${AUTH_URL}/facebook`);
};
