import videoReducer from "./reducers/videoReducer";
import styleReducer from "./reducers/styleReducer";
import mobileReducer from "./reducers/mobileReducer";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import changeReducer from "./reducers/changeReducer";
import adminReducer from "./reducers/adminReducer";

const reducer = combineReducers({
  videos: videoReducer,
  classes: styleReducer,
  drawer: mobileReducer,
  change: changeReducer,
  admin: adminReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
