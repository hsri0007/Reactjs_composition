import React from "react";

const CardComponent = ({ data }) => {
  const { state, HandleDelete } = data;
  return (
    <div>
      {state.map(({ name }) => (
        <h1>
          {name} {console.log(data.state)}{" "}
          <button onClick={() => HandleDelete(name)}>
            delete {console.log(data)}
          </button>
        </h1>
      ))}
    </div>
  );
};

export default CardComponent;
