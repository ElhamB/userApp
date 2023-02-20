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
    state = { users:users }, action) => {
        switch (action.type) {
            case FILTER_BY_VALUE:
              let value = action.payload.value;
              let filtereddUsers = state.users.filter((user) => {
                return user.name.toLowerCase().includes(value);
              });
                return { ...state,users: filtereddUsers};
                case ADD_USERS:
                 //let selectedUsers;
                  return{...state,users:[action.selectedUsers]}
              default:
                return state;
        }
    }