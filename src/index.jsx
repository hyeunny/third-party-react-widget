import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './widget.jsx';

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