import { data } from "../../../data";
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removePerson = (id) => {
    // console.log(id);
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);

    /*OR
    setPeople(people.filter((person) => person.id !== id));
     */
  };

  const removeAllPersons = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        // console.log(person);
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removePerson(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        style={{ marginTop: "2rem" }}
        className="btn"
        onClick={removeAllPersons}
        //OR onClick={() => setPeople([])} with upFunction
      >
        clear all
      </button>
    </div>
  );
};

export default UseStateArray;
