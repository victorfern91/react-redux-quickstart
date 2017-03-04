/* global describe, it, expect */
import { ACTIONS } from '../../app/actions/counter';
import reducer from '../../app/reducers/counter';

describe('Reducer > Counter - Unit tests', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {}),
    ).toEqual({ value: 0 });
  });

  it('should increment the state tree with payload 10', () => {
    expect(
      reducer({ value: 12 }, {
        type: ACTIONS.INCREMENT,
        payload: 10,
      }),
    ).toEqual({ value: 22 });
  });

  it('should decrement the state tree with payload -10', () => {
    expect(
      reducer({ value: 0 }, {
        type: ACTIONS.DECREMENT,
        payload: 10,
      }),
    ).toEqual({ value: -10 });
  });
});
