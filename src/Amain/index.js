import React from "react";
import Compositions from "../rext";
import Home from "./Home";

const Amain = () => {
  return <Compositions>{() => <Home />}</Compositions>;
};

export default Amain;
