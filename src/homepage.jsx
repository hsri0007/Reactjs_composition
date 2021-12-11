import React from "react";

const Homepage = () => {
  return (
    <div>
      <div
        style={{
          height: "80vh",
          background: "green",
          display: "grid",
          placeItems: "center",
        }}
      >
        Homepage
      </div>
      <div
        id="hello"
        style={{
          height: "80vh",
          background: "yellow",
          display: "grid",
          placeItems: "center",
        }}
      >
        Homepage
      </div>
      <div
        id="hellos"
        style={{
          height: "80vh",
          background: "blue",
          display: "grid",
          placeItems: "center",
        }}
      >
        about
      </div>
    </div>
  );
};

export default Homepage;
