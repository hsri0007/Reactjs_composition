import React from "react";

const dataFC = (state, action) => {
  switch (action.type) {
    case "add":
      return action.payload;
  }
};

const Global = ({ children }) => {
  const [state, SetState] = React.useReducer(dataFC, false);

  return <div>{children(state, SetState)}</div>;
};

export default Global;
