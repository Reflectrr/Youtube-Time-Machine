import videoReducer from "./reducers/videoReducer";
import styleReducer from "./reducers/styleReducer";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  videos: videoReducer,
  classes: styleReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
