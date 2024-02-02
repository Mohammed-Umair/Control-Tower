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
import { useNavigate } from "react-router";
import Header from "../common/Header";
import RightSider from "../common/RightSider";
import SubHeader from "../common/SubHeader";
import InboardTable from "./InboardTable";
import POTable from "./POTable";

const PoExucation = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <Grid container sx={{ p: 2 }}>
        <Grid item xs={1} sm={3} md={3} lg={3}>
          <RightSider />
        </Grid>
        <Grid item xs={11} sm={9} md={9} lg={9}>
          <SubHeader />
          <Typography
            variant="h6"
            component="p"
            sx={{
              mt: 2,
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
          <Grid container sx={{ p: 2 }}>
            <POTable />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PoExucation;
