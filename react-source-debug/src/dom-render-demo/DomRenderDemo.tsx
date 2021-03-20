import React, { Component } from 'react'

class List extends Component {
  state = {
    a: 1,
    b: 2,
    c: 3
  }

  handleClick = () => {
    this.setState((oldState: any) => {
      const { a, b, c } = oldState;
      return {
        a: a * a,
        b: b * b,
        c: c * c
      }
    })
  }

  
  render() {
    const { a, b, c } = this.state;
    return [
      <span key="a">{a}</span>,
      <span key="b">{b}</span>,
      <span key="c">{c}</span>,
      <button key="button" onClick={this.handleClick}>click me</button>,
    ]
  }
}

class Input extends Component {
  state = {
    name: 'jokcy'
  }

  handleChange = (e: any) => {
    this.setState({
      name: e.target.value
    })
  }


  render() {
    return (
      <input 
        type="text"
        style={{ color: 'red' }}
        onChange={this.handleChange}
        value={this.state.name}
      />
    )
  }
}

class DomRenderDemo extends Component {
  render() {
    return (
      <div>
        <Input />
        <List />
      </div>
    )
  }
}

export default DomRenderDemo