import React from "react";
import CardComponent from "./cardComponent";
import CardCompostion from "./composition";

const Card = () => {
  return (
    <CardCompostion>{(data) => <CardComponent data={data} />}</CardCompostion>
  );
};

export default Card;
