import React, {Component } from 'react'

class Welcome extends Component {

    
    render() {
        const {name, location} = this.props  //destructuring in class

        return <h1>Welcome {name} aka {location}</h1>
    }
}

export default Welcome;
 