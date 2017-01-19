import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './widget.jsx';
import CSSX from 'react-cssx';

export default {
    widget: {
        render: (selector) => {
            ReactDOM.render(<Widget />, document.querySelector(selector));
        },
        log: (alertText) => {
            alert(alertText);
        }
    }
}

// widgets: {
//    myWidget: {
//       render: (selector) => {
//           ReactDOM.render(
//               <Widget />, document.querySelector(selector);
//           );
//       }
//    }