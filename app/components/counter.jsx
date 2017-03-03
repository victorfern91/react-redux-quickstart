import React, { Component } from 'react';
import { increment, decrement } from '../actions/counter';

class Counter extends Component {

  componentDidMount() {
    this.props.store.subscribe(this.forceUpdate.bind(this));
  }

  increment() {
    this.props.store.dispatch(increment(1));
  }

  decrement() {
    this.props.store.dispatch(decrement(1));
  }

  render() {
    const counter = this.props.store.getState().counter;

    return (
      <div>
        <h1>Hello World</h1>
        <h2> Counter : { counter }</h2>
        <button onClick={() => this.increment()}>+1</button>
        <button onClick={() => this.decrement()}>-1</button>
      </div>
    );
  }
}

export default Counter;
