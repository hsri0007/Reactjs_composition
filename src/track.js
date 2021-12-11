import React from "react";

const Tarck = () => {
  const [state, setState] = React.useState([
    {
      id: 0,
      name: "hari",
      checked: false,
    },
    {
      id: 1,
      name: "haris",
      checked: false,
    },
  ]);

  const [stack, setSTtack] = React.useState(false);

  const CheckBoxChange = (id) => {
    const data = state.map((res) =>
      res.id === id ? { ...res, checked: !res.checked } : res
    );
    setState(data);
  };

  return (
    <div>
      <button
        onClick={() => {
          const data = state.map((res) => {
            return stack
              ? { ...res, checked: false }
              : { ...res, checked: true };
          });

          setState(data);
          setSTtack(!stack);
        }}
      >
        selectAll
      </button>
      {state.map((res, i) => (
        <div key={i}>
          <input
            type="checkbox"
            onChange={() => CheckBoxChange(res.id)}
            checked={res.checked}
          />
          <h1 style={{ color: res.checked ? "red" : "black" }}>{res.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Tarck;
