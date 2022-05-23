import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Button,
  Toolbar,
  Menu,
  MenuItem,
  Chip,
  Box,
  ClickAwayListener,
} from "@mui/material";

import { SmartToy, AccountCircle } from "@mui/icons-material";
const Header = (props) => {
  const [profile, setProfile] = useState(null);
  const onProfileOpen = (event) => {
    setProfile(event.currentTarget);
  };
  const onProfileClose = () => {
    setProfile(null);
  };
  return (
    <React.Fragment>
      <AppBar position="sticky" color="default">
        <Toolbar variant="dense">
          {/* 로고 */}
          <IconButton aria-label="logo" color="primary">
            <SmartToy />
            <Box element="div" ml={2}>
              LOGO
            </Box>
          </IconButton>
          {/* 회원 정보 */}
          <Box element="div" ml={"auto"}>
            <Chip
              icon={<AccountCircle />}
              label="관리자 (Admin)"
              variant="outlined"
              onClick={onProfileOpen}
            />
            <Menu
              anchorEl={profile}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              open={Boolean(profile)}
              onBlur={onProfileClose}
            >
              <MenuItem onClick={onProfileClose}>Profile</MenuItem>
              <MenuItem onClick={onProfileClose}>My account</MenuItem>
            </Menu>
          </Box>

          {/* 로그아웃 */}
          <Box ml={2}>
            <Button variant="outlined">로그아웃</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
