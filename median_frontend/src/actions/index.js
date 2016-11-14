import axios from 'axios';

const ROOT_URL = "http://localhost:3000/"

export function getArticle(id){
  let url = ROOT_URL + "articles/" + id;
  let request = axios.get(url);

  return {
    type: "GET_ARTICLE",
    payload: request
  }
}

export function setVisible(selection) {
  if (selection) {
    return {
      type: "TOGGLE_VISIBILITY",
      payload: true
    }
  } else {
    return {
      type: "TOGGLE_VISIBILITY",
      payload: false
    }
  }
}

export function createSelection(selection) {
  let url = ROOT_URL + "selections"
  axios.post(url, { selection })

  return {
    type: "SET_SELECTION",
    payload: selection
  }
}
