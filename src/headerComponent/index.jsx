import React from "react";

const Header = ({ state, SetState }) => {
  return (
    <div>
      <div style={{ minHeight: "8vh", background: "skyblue" }}>
        <button onClick={() => SetState(!state)}>
          {/* {JSON.stringify(state)} */}
        </button>
      </div>
    </div>
  );
};

export default Header;
