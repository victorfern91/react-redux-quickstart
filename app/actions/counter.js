export const ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

export function increment(number) {
  return {
    type: ACTIONS.INCREMENT,
    payload: number,
  };
}

export function decrement(number) {
  return {
    type: ACTIONS.DECREMENT,
    payload: number,
  };
}
