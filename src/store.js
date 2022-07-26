import videoReducer from "./reducers/videoReducer";
import styleReducer from "./reducers/styleReducer";
import mobileReducer from "./reducers/mobileReducer";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import changeReducer from "./reducers/changeReducer";
import adminReducer from "./reducers/adminReducer";
import userReducer from "./reducers/userReducer";

const reducer = combineReducers({
  videos: videoReducer,
  classes: styleReducer,
  drawer: mobileReducer,
  change: changeReducer,
  admin: adminReducer,
  user: userReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
