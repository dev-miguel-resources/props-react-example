import React from "react";

// clean code: 4 arguments
const Greetings = ({ firstName, lastName, age, children }) => {
  //const { firstName, lastName, age, children } = props;
  //console.log(props);
  //const agePerson = age + 40

  return (
    <div>
      Hi {firstName} {lastName} you are {age} years old
      <br />
      {children}
    </div>
  )
};

export default Greetings;
