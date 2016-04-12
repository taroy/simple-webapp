import React, { PropTypes } from 'react'

export default class HelloWorld extends React.Component {
    constructor() {
        super();
    }

    render() {
        let {name} = this.props
        return (
        	<div className="helloworld">
            	<h1>Hello {name} </h1>
            	<p> This is a small web app </p>
        	</div>
        ) 
    }
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
}

