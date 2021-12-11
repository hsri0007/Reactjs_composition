import React, { useState } from "react";

const Krack = () => {
  const [hello, setstate] = useState({
    display: "hidden",
  });

  const changeFunc = () => {
    setstate({
      display: "flex",
      position: "absolute",
      padding: "50px",
      border: "2px solid black",
      transition: "all 400ms cubic-bezier(.28,.57,1,.14)",
      background: "black",
      height: "90vh",
      top: "0",
      width: "70vw",
    });
  };

  return (
    <div>
      <button onClick={changeFunc}>burger</button>
      <div style={hello}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Krack;
