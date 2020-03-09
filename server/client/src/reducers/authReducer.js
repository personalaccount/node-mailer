import { FETCH_USER } from "../actions/types";

// default state is 'null', meaning that it is uncertain whether the user is logged in
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state; // No change of state is necessary, simply return state object.
  }
}
