import { users } from "../assets/users";

//action types
const FILTER_BY_VALUE = "FILTER_BY_VALUE";
const ADD_USERS="ADD_USERS";
//action creators
export const filterByValue = (value) => async (dispatch) => {
    dispatch({ type: FILTER_BY_VALUE, payload: value });
  };
  export const addUsers = (userInfo) => (dispatch) => {
    dispatch({ type: ADD_USERS,selectedUser:userInfo });
  };
  //reducers
  export const userReducer = (
    state = { users:users ,selectedUsers:[]}, action) => {
        switch (action.type) {
            case FILTER_BY_VALUE:
              let value = action.payload.value;
              let filtereddUsers = state.users.filter((user) => {
                return user.name.toLowerCase().includes(value);
              });
                return { ...state,users: filtereddUsers};
                case ADD_USERS: 
                const newItem = action.selectedUser
                const existingUser = state.selectedUsers.find((item) => item.id === newItem.id)
                if (existingUser) {
                  console.log("existingUser ")
                    return {
                        ...state,
                        selectedUsers:state.selectedUsers.filter(({ id }) => id !== newItem.id)
                    }
                }
                else {
                    return {
                        ...state,     
                        selectedUsers:[...state.selectedUsers,newItem]             
                    }
                }               
              default:
                return state;
        }
    }