import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@mui/material";
import { Send, ExpandLess, ExpandMore } from "@mui/icons-material";
import React from "react";

function SideBar(props) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <List
        sx={{
          width: "100%",
          maxWidth: "250px",
          backgroundColor: "#0067ac",
          color: "#ffffff",
          height: "97vh",
        }}
        component="nav"
      >
        {/* 기본 구조 */}
        <ListItemButton>
          <ListItemIcon>
            <Send />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItemButton>

        {/* 서브 메뉴 구조 */}
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <Send />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <Send />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </React.Fragment>
  );
}

export default SideBar;
