 import React, { Component } from 'react'
 
  class EventBind extends Component {
    
      constructor(props) {
          super(props)
      
          this.state = {
               message: 'Hello'
          }
          //commnet for final approach
        //   this.clickHandler= this.clickHandler.bind(this)
      }
        //commnet for final approach
    //   clickHandler() {
    //       this.setState({
    //           message: 'Goodbye!'
    //       })
    //   }

   // for final approach

        clickHandler = () => {
            this.setState({
                message: 'Goodbye!'
            })
        }
      
    
     render() {
         return (
             <div>

                <div>{this.state.message}</div>
               
                {/* undefined in event handling */}
                 {/* <button onClick={this.clickHandler} >click</button> */}
                 
                 {/* Event Bind first approach */}
                 {/* <button onClick={this.clickHandler.bind(this)} >click</button> */}
                    

                    {/* Event binding using arrow function second approach */}
                 {/* <button onClick={()=> this.clickHandler() }>click</button> */}


                 {/* third approach binding in the constructor */}
                 <button onClick={this.clickHandler}>click</button>

            
             </div>
         )
     }
 }

 export default EventBind
 