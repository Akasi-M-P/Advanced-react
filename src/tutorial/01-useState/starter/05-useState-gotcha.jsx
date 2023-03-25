import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const increaseValue = () => {
    // setValue((currentState) => {
    //   const newState = currentState + 1;
    //   return newState;
    // });

    setTimeout(() => {
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <>
      <h2>{value}</h2>
      <button type="button" className="btn" onClick={increaseValue}>
        increase
      </button>
    </>
  );
};

export default UseStateGotcha;
