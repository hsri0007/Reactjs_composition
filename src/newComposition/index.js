import React, { useState } from "react";

const NewComposition = ({ children }) => {
  const [state, SetState] = useState(true);
  const [data, SetData] = useState([
    { id: 1, name: "hari" },
    { id: 2, name: "funboy" },
    { id: 3, name: "clap" },
    { id: 4, name: "qwery" },
    { id: 5, name: "harwi" },
  ]);
  return <div>{children(state, SetState, SetData, data)}</div>;
};

export default NewComposition;
