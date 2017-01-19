import React from 'react';
import ReactDOM from 'react-dom';
import CSSX from 'react-cssx';

class Widget extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    alert('I can monkey around and access the same parent document as the host page. I am just a widget initialized after all.');
    const node = document.createElement('h1');
    node.innerText = this.textInput.value;
    document.body.appendChild(node);
  }

  render() {
    return (
      <CSSX styles={ this.css() }>
        <div className="widget-container">
          <p>How are you today?</p>
          <h1>WHAT WHAT WHAT BOOTSTRAPPING</h1>
          <input ref={(input) => { this.textInput = input; }} type="text" />
          <button onClick={this.handleClick}>Answer</button>
        </div>
      </CSSX>
    );
  }
  css() {
    return (
      <style>
        .widget-container {
          background: #FFF;
          border: 3px solid #BADA55;
          padding: 1em;
        }
        p {
          color: #F00;
          padding: 0;
          margin-bottom: 3.5em;
          font-size: 14px;
        }
      </style>
    );
  }
}

export default Widget;

console.log(`You are using ${React.version} version of React and not ${window.React.version} which is the global one.`);

