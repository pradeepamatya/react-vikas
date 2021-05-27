import React, { Component } from 'react'

 class ClassClick extends Component {
     clickHandler() {
         console.log('clicked the button') 
     }
    render() {
        return (
            <div>
                {/*  event handling in class */}
              <button onClick={this.clickHandler} >click class</button>
                
            </div>
        )
    }
}

export default ClassClick
