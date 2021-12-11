import React from "react";

const Left = ({ state }) => {
  return (
    <div style={{ minHeight: "100vh", background: "green" }}>
      Left{JSON.stringify(state)}
    </div>
  );
};

export default Left;
