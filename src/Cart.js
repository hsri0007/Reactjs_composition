import React, { useEffect } from "react";

const Cart = () => {
  const [state, setState] = React.useState([]);

  useEffect(() => {
    const StoredData = window.localStorage.getItem("saveCart");

    setState(JSON.parse(StoredData));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "90%",
        margin: "auto",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {state.map((res) => (
          <div
            key={res.id}
            style={{
              height: "300px",
              width: "250px",
              background: "white",
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >
            <h1>{res.ProductName}</h1>
            <p>Rs:-{res.cost}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
