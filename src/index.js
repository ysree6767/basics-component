import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <>
      <Person />
      <Message />
    </>
  );
}
const Person = () => <h2> John Joe</h2>;
const Message = () => {
  return <p> this is my message</p>;
};

ReactDOM.render(<Greeting />, document.getElementById("root"));
