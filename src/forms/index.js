import axios from "axios";
import React from "react";

const Forms = () => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("/login", data).then((res) => console.log(res));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          type="password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Forms;
