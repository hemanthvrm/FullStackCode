import { CHECK_USER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case CHECK_USER:
      return action.payload || false;
    default:
      return state;
  }
}
