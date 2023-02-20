import { users } from "../assets/users";

//action types
const FILTER_BY_VALUE = "FILTER_BY_VALUE";
const ADD_USERS="ADD_USERS";
//action creators
export const filterByValue = (value) => async (dispatch) => {
    dispatch({ type: FILTER_BY_VALUE, payload: value });
  };
  export const addUsers = (userInfo) => (dispatch) => {
    dispatch({ type: ADD_USERS,selectedUsers:userInfo });
  };
  //reducers
  export const userReducer = (
    state = { users:users,isAdded:false,selectedUsers:[] }, action) => {
        switch (action.type) {
            case FILTER_BY_VALUE:
                return { users: action.payload };
                case ADD_USERS:
                  return{...state.users,selectedUsers:[action.selectedUsers]}
              default:
                return state;
        }
    }