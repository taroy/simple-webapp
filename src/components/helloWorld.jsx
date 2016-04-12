import React, { PropTypes } from 'react'

export default class HelloWorld extends React.Component {
    constructor() {
        super();

        this.state = {
            enTilfeldigState: false
        }
    }

    enTilfeldigfunksjon() {
        console.log("En funksjon")
    }

    render() {
        let {name} = this.props
        
        this.enTilfeldigfunksjon()
        
        return (
        	<div className="helloworld">
            	<h1>Hello {name} </h1>
            	<p> This is a very small web app </p>
        	</div>
        ) 
    }
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
}

