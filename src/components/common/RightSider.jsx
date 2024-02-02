import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Home from "@mui/icons-material/Home";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import Settings from "@mui/icons-material/Settings";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import Public from "@mui/icons-material/Public";
import SupervisedUserCircleRoundedIcon from "@mui/icons-material/SupervisedUserCircleRounded";
import ViewInArRoundedIcon from "@mui/icons-material/ViewInArRounded";
import WarehouseRoundedIcon from "@mui/icons-material/WarehouseRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import { useNavigate } from "react-router";
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
    icon: <ViewInArRoundedIcon color="balck" />,
    text: "Po Execution",
    path: "/poexucation",
  },
  {
    icon: <SupervisedUserCircleRoundedIcon color="balck" />,
    text: "Inbound Transpotation",
    path: "/inboardTransportation",
  },
  {
    icon: <WarehouseRoundedIcon color="balck" />,
    text: "Warehouse",
    path: "/dashboard",
  },
  {
    icon: <MailOutlineRoundedIcon color="balck" />,
    text: "Outbound Transpotation",
    path: "/dashboard",
  },
  {
    icon: <AutoAwesomeRoundedIcon color="balck" />,
    text: "Customers",
    path: "/dashboard",
  },
  {
    icon: <QuestionAnswerRoundedIcon color="balck" />,
    text: "Returns",
    path: "/dashboard",
  },
];

export default function RightSider() {
  const [open, setOpen] = React.useState(true);

  const navigate= useNavigate()

  const handleNavigate = (item) => {
    console.log(item, "iem....");
    navigate(item.path)
  };

  return (
    <Box component={Paper} sx={{ display: "flex",height:"100vh" }}>
      <Paper elevation={0} sx={{ maxWidth: 256 }}>
        <FireNav component="nav" disablePadding>
          <ListItem component="div" disablePadding>
            <ListItemButton sx={{ height: 56 }}>
              <ListItemIcon>
                <GridViewRoundedIcon color="balck" />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                primaryTypographyProps={{
                  color: "black",
                  fontWeight: "medium",
                  variant: "body1",
                }}
              />
            </ListItemButton>

            <IconButton size="large">
              <MenuRoundedIcon />
            </IconButton>
          </ListItem>

          <List>
            {ListData.map((item, index) => {
              return (
                <ListItem disablePadding key={index}>
                  <ListItemButton
                    sx={{
                      " &:hover": {
                        boxSizing: "border-box",
                        border: "1px solid black",
                        borderRadius: 2,
                        boxShadow: "0px 15px 10px -15px #111",
                        
                      },
                      "&:active":{
                        boxSizing: "border-box",
                        border: "1px solid black",
                        borderRadius: 2,
                        boxShadow: "0px 15px 10px -15px #111",
                      }
                    }}
                    onClick={() => handleNavigate(item)}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </FireNav>
      </Paper>
    </Box>
  );
}
