export default (state={visible: false}, action) => {
  switch(action.type) {
    case "TOGGLE_VISIBILITY":
      return {visible: action.payload}
    default:
      return state
  }
}
