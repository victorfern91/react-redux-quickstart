/* global describe, it, expect */
import { ACTIONS, increment, decrement } from '../../app/actions/counter';

describe('Actions > Counter - Unit tests', () => {
  it('should send a increment action with payload equal 10', () => {
    const expectAction = {
      type: ACTIONS.INCREMENT,
      payload: 10,
    };
    expect(increment(10)).toEqual(expectAction);
    expect(increment(10).payload).toBe(10);
  });

  it('should send a increment action with payload equal 20', () => {
    const expectAction = {
      type: ACTIONS.INCREMENT,
      payload: 20,
    };
    expect(increment(20)).toEqual(expectAction);
    expect(increment(20).payload).toBe(20);
  });

  it('should send a decrement action with payload equal 120', () => {
    const expectAction = {
      type: ACTIONS.DECREMENT,
      payload: 120,
    };
    expect(decrement(120)).toEqual(expectAction);
    expect(decrement(120).payload).toBe(120);
  });

  it('should send a decrement action with payload equal 1', () => {
    const expectAction = {
      type: ACTIONS.DECREMENT,
      payload: 1,
    };
    expect(decrement(1)).toEqual(expectAction);
    expect(decrement(1).payload).toBe(1);
  });
});
