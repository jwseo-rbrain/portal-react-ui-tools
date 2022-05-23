import React from "react";
import { Box, Toolbar } from "@mui/material";
const FootBar = (props) => {
  return (
    <React.Fragment>
      <Box
        position="absolute"
        bgcolor="default"
        width={"98vw"}
        sx={{
          bottom: 0,
          padding: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
        }}
      >
        <Toolbar>
          담당자 : 레인보우 브레인 | 이메일 : admin@rbrain.com | 내선 번호 :
          02-000-0000
        </Toolbar>
      </Box>
    </React.Fragment>
  );
};

export default FootBar;
