import React from "react";

const CardCompostion = ({ children }) => {
  const [state, setState] = React.useState([{ id: 1, name: "hari" }]);
  const data = {
    state,
    setState,
  };

  const HandleDelete = (arg) => {
    setState(() => state.filter((res) => res.name !== arg));
  };
  return <div>{children({ ...data, HandleDelete })}</div>;
};

export default CardCompostion;
