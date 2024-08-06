import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Section1 from './components/section1/section1';
import Section2 from './components/section2';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className='container-fluid bg-dark'>
          <Section1 />
          <div>
            <Section2/>
          </div>
        </div>
      </>
    );
  }
}

export default App;
