import { Button, Grid, TextField } from "@mui/material";
import React from "react";
const App = () => {
  const onSubmitClick = (event) => {
    event.preventDefault();
    console.log("dfdf");
  };
  return (
    <Grid
      sx={{ backgroundColor: "#0067ac", height: "100vh" }}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        xs={9}
        sm={6}
        md={5}
        lg={4}
        xl={3}
        sx={{
          backgroundColor: "#ffffff",
          padding: "50px",
          borderRadius: "15px",
        }}
      >
        <form onSubmit={onSubmitClick}>
          <Grid container direction="column">
            <Grid item mb={1} sx={{ textAlign: "center" }}>
              <img src="/image/logo_full.png" alt="logo" loading="lazy" />
            </Grid>
            <Grid item mb={1} mt={3}>
              <TextField label="아이디" variant="outlined" fullWidth />
            </Grid>
            <Grid item mb={1}>
              <TextField
                type="password"
                label="비밀번호"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item mb={1}>
              <Button variant="contained" type="submit" size="large" fullWidth>
                로그인
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default App;
