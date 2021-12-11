import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    const StoredData = window.localStorage.getItem("saveCart");

    setstate(JSON.parse(StoredData));
  }, []);

  // const Scroll = (value) => {
  //   const scrollToElement = require("scroll-to-element");
  //   scrollToElement(value, {
  //     offset: -100,
  //     ease: "out-bounce",
  //     duration: 1500,
  //   });
  // };
  // const Scrolls = () => {
  //   const scrollToElement = require("scroll-to-element");

  //   // with options
  //   scrollToElement("#hellos", {
  //     offset: -100,
  //     // ease: "out-bounce",
  //     duration: 1500,
  //   });

  //   // or if you already have a reference to the element
  //   // var elem = document.querySelector(".className");
  //   // scrollToElement(elem, {
  //   //   offset: 0,
  //   //   ease: "out-bounce",
  //   //   duration: 1500,
  //   // });
  // };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "10vh",
        }}
      >
        <div style={{ flex: 1 }}>Logo</div>
        <div
          style={{ display: "flex", justifyContent: "space-between", flex: 1 }}
        >
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
          <Link to="/cart">cart({state.length})</Link>
          {/* <Link onClick={() => Scroll("#hello")}>home</Link>
          <Link onClick={Scrolls}>about</Link>
          <Link>contact</Link>
          <Link to="/cart">cart</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
