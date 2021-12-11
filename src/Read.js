import React from "react";

const Read = () => {
  const [state, setState] = React.useState(true);
  const Desc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
    imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque
    enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
    auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc
    sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed
    nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus
    gravida venenatis. Integer fringilla congue eros non fermentum. Sed
    dapibus pulvinar nibh tempor porta.`;

  return (
    <div>
      {state ? Desc.slice(0, 250) + "......" : Desc}
      <button onClick={() => setState(!state)}>
        {state ? "Readmore" : "ReadLess"}
      </button>
    </div>
  );
};

export default Read;
