import React from 'react';
import './App.css';

class App extends React.Component {

  test = [
    {name: 1, checked: false},
    {name: 2, checked: true},
    {name: 3, checked: true}
  ];
  constructor(props: any) {
    super(props);
  }

  activateLasers = () => {
    console.log('1');
    this.test[0].checked = true;
    console.log(this.test);
    this.setState(test => ({
      test: [
        {name: 1, checked: true},
        {name: 2, checked: true},
        {name: 3, checked: true}
      ]
    }), () => {

    });
  }
    

  render() {
    const test = this.test;
    const listItems = test.map((l) => 
      <div key={l.name}>
        <input type="checkbox" defaultChecked={l.checked} />{`${l.checked}`}
        <br />
      </div>
    )
    return (
      <div>
        <div>{listItems}</div>
        <button onClick={this.activateLasers}>点击</button>
      </div>
    );
  }
  
}

export default App;
