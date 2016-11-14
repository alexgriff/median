export default (state={selection: ""}, action) => {
  switch (action.type) {
    case "SET_SELECTION":
      return {selection: action.payload }
    default:
      return state
  }
}
