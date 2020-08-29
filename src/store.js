import videoReducer from "./reducers/videoReducer";
import styleReducer from "./reducers/styleReducer";
import mobileReducer from "./reducers/mobileReducer";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  videos: videoReducer,
  classes: styleReducer,
  drawer: mobileReducer,
});

const store = composeWithDevTools
  ? createStore(reducer, composeWithDevTools())
  : createStore(reducer);

export default store;
