//action types
const FILTER_BY_VALUE = "FILTER_BY_VALUE";

//action creators
export const filterByValue = (value) => async (dispatch) => {
    dispatch({ type: FILTER_BY_VALUE, payload: value });
  };

  //reducers
  export const userReducer = (
    state = { users: [] }, action) => {
        switch (action.type) {
            case FILTER_BY_VALUE:
                return { users: action.payload };
              default:
                return state;
        }
    }