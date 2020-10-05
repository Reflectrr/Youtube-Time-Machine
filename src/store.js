import videoReducer from "./reducers/videoReducer";
import listReducer from "./reducers/listReducer";
import styleReducer from "./reducers/styleReducer";
import mobileReducer from "./reducers/mobileReducer";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  videos: videoReducer,
  classes: styleReducer,
  drawer: mobileReducer,
  category: listReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
