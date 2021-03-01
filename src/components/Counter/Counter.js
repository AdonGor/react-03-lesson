import React from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

class Counter extends React.Component {

  static defaultProps = {
    initialValue: 0,
  }

  static propTypes = {
    //
  }

  state ={
      value: this.props.initialValue,
  }

  hendleIncrement =() => {
      this.setState(prevState  => ({ value: prevState.value + 1 }));
  };

  hendleDecrement =() => {
    this.setState(prevState  => ({value: prevState.value - 1 }));
  };

  render() {
    return (
      <div className="Counter">
        <Value value={this.state.value}/>
        <Controls onIncrement={this.hendleIncrement} onDecrement={this.hendleDecrement}/>
      </div>
    );
  }
}

export default Counter;
