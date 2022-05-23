import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const FilterTime = () => {
  return (
    <Stack component="form" noValidate spacing={3}>
      <TextField
        type="time"
        defaultValue="07:30"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ width: 150 }}
      />
    </Stack>
  );
};

export default FilterTime;
