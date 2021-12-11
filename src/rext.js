import React from "react";

const Compositions = ({ children }) => {
  const [state, setState] = React.useState(5);
  return <div>{children(state)}</div>;
};

export default Compositions;
