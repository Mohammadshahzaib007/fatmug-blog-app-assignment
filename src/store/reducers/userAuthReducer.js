import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user: '',
  isLoggedIn: false,
  name: '',
  blogs: []
};

const userAuthReducer = (state = initialState, action) => {
  switch (action) {
    case actionTypes.LOGIN:
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: action.payload.isLoggedIn,
        name: action.payload.name
      };

    case actionTypes.SIGNUP:
      return state;
    default:
      return state;
  }
}
  ;

export default userAuthReducer
;
