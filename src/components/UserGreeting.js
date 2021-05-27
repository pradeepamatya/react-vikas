import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // normal method without using if elsed
    // return (
    //   <div>
    //     <div>Welcome Vishwas</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
    //First method
    // if (this.state.isLoggedIn) {
    //   return <div>welcome Vishwas</div>;
    // } else {
    //   return <div>Welcome Guest </div>;
    // }
    // second method (element variable approach)
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Vishwas</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;
    //third method terniary operator
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Vishwas </div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
    //Fourth method short circuit approach
    // return this.state.isLoggedIn && <div> Welcome Vishwas </div>;
  }
}

export default UserGreeting;
