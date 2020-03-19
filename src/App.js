import React, { Component } from 'react';
import Component1 from './functional/component1'

class App extends Component {
  state = {
    counter: 0
  }

  increment = () => {
    this.setState({ counter: 5 })
  }
  render() {
    return (
      <div className="App">
        <Component1 name="Adarsh" />
        
        {/* <button onClick={() => this.increment()}>Button</button> */}
        {/* <div>
          Div 1 {this.state.counter }
        </div>
        <div>
          Div 2
        </div>
        <div>
          Div 3
        </div> */}



        {/* <div style={styles.styles}>
          style
        </div>
        <button>Button 1</button>
        React
        {console.log(<div />)} */}


        {/* {React.createElement(
          'button',
          { className: 'App' },
          "React"
        )} */}

      </div>
    );
  }
}

// const Appinstance = new App()
// console.log(Appinstance)

export default App;
