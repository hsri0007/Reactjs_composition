import React from "react";

const Nprac = () => {
  const [state, setState] = React.useState([
    {
      id: 0,
      data: "04-05-2021",
    },
    {
      id: 1,
      data: "04-05-2021",
    },
    {
      id: 2,
      data: "04-05-2021",
    },
  ]);

  const mData = (arg) => {
    const newDate = new Date(arg);

    return newDate.toLocaleDateString();
  };

  const stateWithDate = () => {
    const data = state.map((res) => {
      return { ...res, data: mData(res.data) };
    });

    console.log(data);
  };

  stateWithDate();

  return (
    <div>
      <div>Nprac</div>
    </div>
  );
};

export default Nprac;
