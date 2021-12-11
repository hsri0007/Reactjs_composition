import React from "react";

const App = () => {
  const [name, setName] = React.useState("");
  const [state, setstate] = React.useState([
    {
      id: 1,
      name: "hari",
    },
    {
      id: 2,
      name: "suresh",
    },
  ]);

  const [show, setShow] = React.useState(false);
  const [editItem, seteditItem] = React.useState({
    id: 1,
    name: "",
  });

  // Deleting the item............

  const HandleDelete = (id) => {
    const filterData = state.filter((res) => res.id !== id);
    setstate(filterData);
  };

  // Adding item to state..... insert create

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: Math.random(),
      name: name,
    };

    setstate([...state, data]);
  };

  // Editing The Item or update....

  const HandleEdit = (res) => {
    seteditItem(res);
    // HandleDelete(res.id)
    setShow(true);
  };

  // submitting the edited item....

  const EditSubmit = (e) => {
    e.preventDefault();

    const modifingData = state.map((res) =>
      res.id === editItem.id ? { ...editItem } : res
    );
    setstate(modifingData);

    // setstate([...state,editItem])
    setShow(false);
  };

  return (
    <div>
      {state.map((res) => (
        <>
          <h1 key={res.id}>{res.name}</h1>
          <button onClick={() => HandleDelete(res.id)}>delete</button>
          <button onClick={() => HandleEdit(res)}>edit</button>
        </>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" />
      </form>

      {show && (
        <form onSubmit={EditSubmit} style={{ marginTop: "50px" }}>
          <input
            type="text"
            placeholder="type here..."
            value={editItem.name}
            onChange={(e) => seteditItem({ ...editItem, name: e.target.value })}
          />
          <input type="submit" />
        </form>
      )}
    </div>
  );
};

export default App;
