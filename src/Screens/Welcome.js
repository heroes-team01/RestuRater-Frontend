import React, { Component } from 'react';
export class Welcome extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={cat} className="App-logo" alt="logo" /> */}
          <h1>
            Welcome to Cat Owners
          </h1>
        </header>
      </div>
    );
  }
}

export default Welcome;