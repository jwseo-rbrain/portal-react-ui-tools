import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const FilterRadio = (props) => {
  const { title, list } = props;
  return (
    <FormControl sx={{ marginBottom: "10px" }}>
      <FormLabel id="demo-row-radio-buttons-group-label">
        {title ?? "라디오 선택"}
      </FormLabel>
      <RadioGroup row name="row-radio-buttons-group">
        {list.map((item) => (
          <FormControlLabel
            key={item.value}
            label={item.label}
            value={item.value}
            control={<Radio />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default FilterRadio;
