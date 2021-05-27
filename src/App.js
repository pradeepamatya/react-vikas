import React from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";

function App() {
  return (
    <>
      <div className="App">
        {/* <Message />
    <Counter /> */}

        {/* <Greet name="vishwas" location="ktm" > <p>this is childered props</p> </Greet> 
      <Greet name="technical" />
      */}
        {/* <Welcome name="pradeep" location="ktt" /> 
    <Greet name="Diana" location="ktm" /> */}
        {/* <FunctionClick />
      <ClassClick /> */}
        {/* <EventBind /> */}
        {/* <ParentComponent /> */}
        <UserGreeting />
      </div>
    </>
  );
}

export default App;
