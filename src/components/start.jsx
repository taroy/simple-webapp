import '../css/master.scss';
import HelloWorld from './HelloWorld';
import React from 'react';
import ReactDom from 'react-dom'

ReactDom.render(<HelloWorld name="World"/>, document.getElementById("root"));