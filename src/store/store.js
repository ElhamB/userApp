import {
    legacy_createStore as createStore,
    applyMiddleware,
  } from "redux";
  import thunk from "redux-thunk";
  import { composeWithDevTools } from "@redux-devtools/extension";
  import reducer from "./reducer";
 import { users } from "../assets/users";

  const initialState = {
   users
  };
  const middleware = [thunk];
  
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  export default store;
  