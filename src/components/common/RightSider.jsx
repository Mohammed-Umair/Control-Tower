import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useNavigate } from "react-router";
import useMediaQuery from "@mui/material/useMediaQuery";
import ViewInArRoundedIcon from "@mui/icons-material/ViewInArRounded";
import SupervisedUserCircleRoundedIcon from "@mui/icons-material/SupervisedUserCircleRounded";
import WarehouseRoundedIcon from "@mui/icons-material/WarehouseRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";

// Define the theme with breakpoints
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 10,
    paddingRight: 100,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

const ListData = [
  {
    icon: <ViewInArRoundedIcon color="black" />,
    text: "Po Execution",
    path: "/poexucation",
  },
  {
    icon: <SupervisedUserCircleRoundedIcon color="black" />,
    text: "Inbound Transportation",
    path: "/inboardTransportation",
  },
  {
    icon: <WarehouseRoundedIcon color="black" />,
    text: "Warehouse",
    path: "/dashboard",
  },
  {
    icon: <MailOutlineRoundedIcon color="black" />,
    text: "Outbound Transportation",
    path: "/dashboard",
  },
  {
    icon: <AutoAwesomeRoundedIcon color="black" />,
    text: "Customers",
    path: "/dashboard",
  },
  {
    icon: <QuestionAnswerRoundedIcon color="black" />,
    text: "Returns",
    path: "/dashboard",
  },
];

export default function RightSider() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNavigate = (item) => {
    console.log(item, "item....");
    navigate(item.path);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box component={Paper} sx={{ display: "flex", height: "100vh" }}>
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
          <FireNav component="nav" disablePadding>
            <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 ,marginLeft:"-10px"}}>
                <ListItemIcon>
                  <IconButton size="large">
                    <MenuRoundedIcon />
                  </IconButton>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <List>
              {ListData.map((item, index) => (
                <ListItem disablePadding key={index}>
                  <ListItemButton
                    sx={{
                      " &:hover": {
                        boxSizing: "border-box",
                        border: "1px solid black",
                        borderRadius: 2,
                        boxShadow: "0px 15px 10px -15px #111",
                      },
                      "&:active": {
                        boxSizing: "border-box",
                        border: "1px solid black",
                        borderRadius: 2,
                        boxShadow: "0px 15px 10px -15px #111",
                      },
                    }}
                    onClick={() => handleNavigate(item)}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    {!isMobile && <ListItemText primary={item.text} />}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </FireNav>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
