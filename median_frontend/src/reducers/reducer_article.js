export default (state = {text: ""}, action) => {
  switch(action.type) {
    case 'GET_ARTICLE':
      return {...action.payload.data.article};
    default:
      return state;
  }
}
