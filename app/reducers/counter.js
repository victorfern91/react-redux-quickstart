import { ACTIONS } from '../actions/counter';

const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return state + action.payload;
    case ACTIONS.DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};
