import { Grid } from "@material-ui/core";
import React from "react";
import Card from "../Cards/Cards";

const Right = ({ data, SetData }) => {
  return (
    <div style={{ minHeight: "100vh", background: "yellow", padding: "50px" }}>
      <Grid container spacing={3}>
        {data.map((res, i) => (
          <Grid key={i} item>
            <Card res={res} data={data} SetData={SetData} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Right;
