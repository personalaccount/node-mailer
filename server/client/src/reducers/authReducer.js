// default state is an empty object
export default function(state = {}, action) {
  switch (action.type) {
    default:
      return state; // No change of state is necessary, simply return state object.
  }
}
