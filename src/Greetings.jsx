import React from "react";

// clean code: 4 arguments
const Greetings = ({ firstName, lastName, age, children }) => {
  //onst { firstName, lastName, age, children } = props;
  //console.log(props);
  
  return (
    <div>
      Hi {firstName} {lastName} you are {age}
      <br />
      {children}
    </div>
  )
};

export default Greetings;
