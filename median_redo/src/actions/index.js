import axios from 'axios'

const ROOT_URL = "http://localhost:3000/"

export function getArticle(id){
  let url = ROOT_URL + "articles/" + id;
  let request = axios.get(url);

  return {type: "GET_ARTICLE", payload: request}
}

export function handleSelect(selection, id, startIndex) {
  return {type: "SELECT_TEXT", text: selection, id, startIndex }
}

export function saveSelection(params) {
  let url = ROOT_URL + "selections"
  axios.post(url,params);
  return {type: "SAVE_SELECTION"}
}

export function showSelections() {
  let url = ROOT_URL + "selections";
  let request = axios.get(url);

  return {type: "SHOW_SELECTIONS", payload: request}
}
