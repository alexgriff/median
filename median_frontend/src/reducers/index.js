import { combineReducers } from 'redux';
import ArticleReducer from './reducer_article';
import VisibleReducer from './reducer_toggle';
import SelectionReducer from './reducer_selection';

const rootReducer = combineReducers({
  article: ArticleReducer,
  visible: VisibleReducer,
  selection: SelectionReducer
});

export default rootReducer;
