import React, { useState } from "react";

const Prac = () => {
  const [state, setstate] = useState([]);

  const handleItem = () => {
    const data = {
      id: state.length + 1,
      input: "",
    };
    setstate([...state, data]);
  };

  const DeleteItem = (id) => {
    const filterData = state.filter((res) => res.id !== id);
    setstate(filterData);
  };

  const handleChange = (e, id) => {
    const data = state.find((res) => res.id === id);

    const datas = {
      ...data,
      input: e.target.value,
    };

    const mapData = state.map((res) => (res.id === id ? datas : res));
    setstate(mapData);
  };

  return (
    <div>
      <button onClick={handleItem}>ADD Items</button>
      {state.map((res, i) => (
        <div key={i}>
          {
            <>
              <input
                type="text"
                name="input"
                placeholder="type here........."
                onChange={(e) => handleChange(e, res.id)}
              />
              <button onClick={() => DeleteItem(res.id)}>deleteItems</button>
            </>
          }
        </div>
      ))}
    </div>
  );
};

export default Prac;
