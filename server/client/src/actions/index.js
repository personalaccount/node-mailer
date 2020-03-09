import axios from "axios"; //library to make ajax requests
import { FETCH_USER } from "./types";

// define action creator
// export const fetchUser = () => {
//     // dispatch an action only after the request has been successfully completed
//     return function(dispatch) {
//         axios.get("/api/user")
//             .then(res => dispatch({type: FETCH_USER, payload: res}))
//     }
// };

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/user");
  dispatch({ type: FETCH_USER, payload: res.data });
};
