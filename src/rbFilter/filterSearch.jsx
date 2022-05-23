import React from "react";
import { Grid, TextField, Button } from "@mui/material";
import { Send } from "@mui/icons-material";
const FilterKeyword = (props) => {
  const { title } = props;
  return (
    <Grid container>
      <Grid item xs={9} sm={5}>
        <TextField label={title} variant="standard" fullWidth />
      </Grid>
      <Grid item xs={2} sm={5} marginLeft={2} marginTop={2}>
        <Button variant="contained" size="small" endIcon={<Send />}>
          검색
        </Button>
      </Grid>
    </Grid>
  );
};

export default FilterKeyword;
