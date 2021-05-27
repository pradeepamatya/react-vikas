import React from 'react'
  //destructuring
// const Greet = ({name , location}) => {

//destructuring 2nd method
    const Greet = props => {
        const { name, location } = props;
return (
    <div>
    <h1>
    Hello {name}  aka {location}</h1>
    {/* {props.children} */}
    </div>

);
};

export default Greet;