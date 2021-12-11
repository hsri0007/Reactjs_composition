import React from "react";
import NewComposition from "../newComposition";
import Left from "./Left";
import Right from "./right";

const ContentPage = ({ state, data, SetState, SetData }) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, display: state ? "block" : "none" }}>
          <Left />
        </div>
        <div style={{ flex: 5 }}>
          <Right data={data} SetData={SetData} />
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
