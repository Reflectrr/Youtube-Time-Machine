import channelReducer from "./reducers/channelReducer";
import styleReducer from "./reducers/styleReducer";
import mobileReducer from "./reducers/mobileReducer";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./reducers/userReducer";

const reducer = combineReducers({
  channels: channelReducer,
  classes: styleReducer,
  drawer: mobileReducer,
  user: userReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
