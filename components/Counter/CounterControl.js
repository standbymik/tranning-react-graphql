import React, { Component } from 'react'

export default class CounterControl extends Component {
  render() {
    return (
      <div>
        <div>
            <button onClick={this.props.onAdd}>+</button>
            <button onClick={this.props.onMinus}>-</button>
            <button onClick={this.props.onReset}>reset</button>
        </div>
      </div>
    )
  }
}
