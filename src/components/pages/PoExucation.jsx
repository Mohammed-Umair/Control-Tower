import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";


import DashboardCards from "../common/DashboardCards";
import { dashboardCardsData } from "../data/dashboardCardData";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router";
import Header from "../common/Header";
import RightSider from "../common/RightSider";
import SubHeader from "../common/SubHeader";
import InboardTable from "./InboardTable";
import POTable from "./POTable";
import NewSubHeader from "../common/NewSubHeader";


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
const PoExucation = () => {
  const navigate = useNavigate();
  
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Header />

      <Grid container sx={{ p: isMobile? 0 : 2}}>
        <Grid item xs={2} sm={2} md={3} lg={3}>
          <RightSider />
        </Grid>
        <Grid item xs={10} sm={10} md={9} lg={9}>
        <NewSubHeader />

          <Typography
            variant="h6"
            component="p"
            sx={{
              mt: 2,
              ml:2,
              fontSize: {
                xs: "14px",
                sm: "14px",
                md: "20px",
                lg: "20px",
              },
            }}
          >
            PO EXUCATION
          </Typography>
          <Grid container sx={{ p: isMobile?"5px": 2 }}>
            <POTable />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PoExucation;
