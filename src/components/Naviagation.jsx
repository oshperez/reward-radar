import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import HomeIcon from "@mui/icons-material/Home";
import Logo from "./Logo";
import AppLink from "./AppLink";

function Naviagation() {
  return (
    <Box sx={{ padding: 3 }}>
      <Logo />
      <List>
        <AppLink to="/dashboard">
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <SpaceDashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </AppLink>
        <AppLink>
          <ListItem to="/">
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </AppLink>
      </List>
    </Box>
  );
}

export default Naviagation;
