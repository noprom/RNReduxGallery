'use strict';

import * as TYPES from '../actions/types';

const initialState = {
  isLoggedIn: false,
  user: {},
  status: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.LOGGED_DOING:
      return {
        ...state,
        status: 'doing'
      }
      break;
    case TYPES.LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
        status: 'done'
      }
      break;
    case TYPES.LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
        status: null
      }
      break;
    case TYPES.LOGGED_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
        status: null
      }
      break;
    default:
      return state;
  }
}
