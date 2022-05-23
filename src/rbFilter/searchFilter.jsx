import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

const SearchFilter = (props) => {
  const { filerList } = props;
  const [filters, setFilters] = useState(filerList ?? []);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
      >
        <Typography>검색 필터</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {filters.map((el, index) => (
          <Box key={index} sx={{ width: "100%" }}>
            {el}
          </Box>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default SearchFilter;
