import { SET_CURRENT_USER } from './user.types';

const initalState = {
  currentUser: null
};

const userReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_USER:
      console.log('from reducer', payload);

      return {
        ...state,
        currentUser: payload
      };

    default:
      return state;
  }
};

export default userReducer;
