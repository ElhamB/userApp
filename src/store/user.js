import { users } from "../assets/users";

//action types
const FILTER_BY_VALUE = "FILTER_BY_VALUE";
const ADD_OR_REMOVE_USER = "ADD_OR_REMOVE_USER";
//action creators
export const filterByValue = (value) => async (dispatch) => {
  dispatch({ type: FILTER_BY_VALUE, payload: value });
};
export const addOrRemoveUser = (userInfo) => (dispatch) => {
  dispatch({ type: ADD_OR_REMOVE_USER, selectedUser: userInfo });
};
//reducers
export const userReducer = (
  state = { users: users, selectedUsers: [] },
  action
) => {
  switch (action.type) {
    case FILTER_BY_VALUE:
      let filteredUsers=[];
      const keys=["name","email"];
      let value = action.payload.value;
      if (value) {
        filteredUsers = state.users.filter((user) => 
         {
          return  keys.some((key)=>user[key].toLowerCase().includes(value)) ;
         }
        );
      } else filteredUsers = users;
      return { ...state, users: filteredUsers };
    case ADD_OR_REMOVE_USER:
      const newItem = action.selectedUser;
      const existingUser = state.selectedUsers.find(
        ({ id }) => id === newItem.id
      );
      if (existingUser) {
        console.log("existingUser ");
        return {
          ...state,
          selectedUsers: state.selectedUsers.filter(
            ({ id }) => id !== newItem.id
          ),
        };
      } else {
        return {
          ...state,
          selectedUsers: [...state.selectedUsers, newItem],
        };
      }
    default:
      return state;
  }
};
