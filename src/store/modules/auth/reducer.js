import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  token: null,
  user: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      console.log('REDUCER', action.payload);
      return state;
    }

    default:
      return state;
  }
}
