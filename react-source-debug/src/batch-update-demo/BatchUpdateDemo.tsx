import React, { Component } from 'react'
import { unstable_batchedUpdates as batchedUpdates } from 'react-dom';

export default class BatchUpdateDemo extends React.Component {
  state = {
    number: 0
  }

  handleClick = () => {
    // setTimeout 会导致应用整体的性能下降
    // setTimeout(() => {
    //   this.countNumber();
    // }, 0)

    // setTimeout(() => {
    //   batchedUpdates(() => this.countNumber())
    // });

    this.countNumber();
  }

  // 函数中多个setState会被合并
  countNumber() {
    console.log('debug0');
    let num = this.state.number;
    this.setState({
      number: num + 1
    })
    console.log(this.state.number);
    // num = this.state.number;
    this.setState({
      number: num + 2
    })
    console.log(this.state.number);
    // num = this.state.number;
    this.setState({
      number: num + 3
    })
    console.log(this.state.number);
  }

  render() {
    return <button onClick={this.handleClick}>Num: {this.state.number}</button>
  }
}