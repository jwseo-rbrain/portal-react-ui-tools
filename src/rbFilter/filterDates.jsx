import * as React from "react";
import { TextField, Grid } from "@mui/material";
import FilterDrop from "./filterDrop";
const FilterDates = (props) => {
  return (
    <Grid container sx={{ marginBottom: "10px" }}>
      <Grid item>
        <FilterDrop title="날짜유형" />
      </Grid>
      <Grid item>
        <TextField
          label="시작 날짜"
          type="date"
          defaultValue="2017-05-24"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          label="종료 날짜"
          type="date"
          defaultValue="2017-05-24"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default FilterDates;
