import React from "react";

const Troot = (props) => {
  let hello = 225;
  return <div hello={hello}>{props.children}</div>;
};

export default Troot;
