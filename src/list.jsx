import React, { useState } from "react";
import { Paper, Box, FormControlLabel, Switch, Fade } from "@mui/material";

import SearchFilter from "./rbFilter/searchFilter";
import FilterDates from "./rbFilter/filterDates";
import FilterRadio from "./rbFilter/filterRadio";
import FilterSearch from "./rbFilter/filterSearch";

const List = (props) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };
  return (
    <React.Fragment>
      <SearchFilter
        filerList={[
          <FilterDates />,
          <FilterRadio
            title="라디오선택!"
            list={[
              { label: "라디오2", value: "1" },
              { label: "라디오1", value: "2" },
              { label: "라디오3", value: "3" },
            ]}
          />,
          <FilterSearch title="검색어 입력" />,
        ]}
      />
    </React.Fragment>
  );
};

export default List;
