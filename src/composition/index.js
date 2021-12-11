import React from "react";
import Global from "../globalstate";

const Composition = () => {
  return (
    <div>
      sas
      <Global>
        {(state, SetState) => (
          <div onClick={() => SetState({ type: "add", payload: !state })}>
            {state ? "hari" : "berry"}
          </div>
        )}
      </Global>
    </div>
  );
};

export default Composition;
