import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // Never modify the text directly instead makeused of set state
        // this.state.count = this.state.count + 1
        //to chage the state setstate method must be used

        // this.setState({
        //     count: this.state.count +1
        // },
        // ()=>{
        //     console.log('callback value', this.state.count)
        // })

        this.setState(prevState  => ({
            count: prevState.count +1
        }))
        console.log(this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive() } >Increment</button>
            </div>
        )
    }
}

export default Counter
