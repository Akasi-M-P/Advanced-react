import { useState } from 'react';

const UseStateObject = () => {
  const [registrant, setRegistrant] = useState({
    name: "Peter",
    occupation: "Software Engineer",
    company: "Microsoft",
    idNumber: 123456789,
  });

  const displayRegistrant = () => {
    setRegistrant({ ...registrant, occupation: "Backend Developer" });
    // setRegistrant({
    //   name: "Pearl",
    //   occupation: "System Analyst",
    //   company: "Google",
    //   idNumber: 23456789,
    // });
  };

  // const { name, occupation, company, idNumber } = registrant;

  return (
    <>
      <h3>{registrant.name}</h3>
      <h3>{registrant.occupation}</h3>
      <h3>{registrant.company}</h3>
      <h3>Ghana Card Number :{registrant.idNumber}</h3>
      <button className="btn" onClick={displayRegistrant}>
        Next
      </button>
    </>
  );
};

export default UseStateObject;
