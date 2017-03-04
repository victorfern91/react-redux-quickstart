import { ACTIONS } from '../actions/counter';

const initialState = {
  value: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { value: state.value + action.payload };
    case ACTIONS.DECREMENT:
      return { value: state.value - action.payload };
    default:
      return state;
  }
};
