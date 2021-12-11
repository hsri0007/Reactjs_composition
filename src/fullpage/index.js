import React from "react";
import ContentPage from "../contentPage";
import HeaderComponent from "../headerComponent";
import NewComposition from "../newComposition";

const Fullpage = () => {
  return (
    <div>
      <NewComposition>
        {(state, SetState, SetData, data) => (
          <div>
            <HeaderComponent state={state} SetState={SetState} />
            <ContentPage
              state={state}
              SetState={SetState}
              SetData={SetData}
              data={data}
            />
            <div>dd</div>
          </div>
        )}
      </NewComposition>
    </div>
  );
};

export default Fullpage;
