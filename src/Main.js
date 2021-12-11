import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

const Main = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    axios.get("/shop.php").then((res) => setstate(res.data));
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "grey", padding: "50px" }}>
      <h1>Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {state.map((res) => (
          <div
            className="container_main"
            key={res.menu_id}
            style={{
              height: "300px",
              width: "250px",

              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >
            <h1>{res.cat_name}</h1>

            <button
              style={{ marginTop: "100px", cursor: "pointer" }}
              // onClick={() => SaveItems(res)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
