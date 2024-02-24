import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import DashboardCards from "./common/DashboardCards";
import { dashboardCardsData } from "./data/dashboardCardData";
import { useNavigate } from "react-router";
import Header from "./common/Header";
import RightSider from "./common/RightSider";
import SubHeader from "./common/SubHeader";
import NewSubHeader from "./common/NewSubHeader";

const Dashboard = () => {
  const navigate = useNavigate();

  const navigateToKPI1 = () => {
    navigate("/KPI1");
  };

  const navigateToKPI2 = () => {
    navigate("/KPI2");
  };

  return (
    <>
      <Header />

      <Grid container sx={{ p: "0" }}>
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
            Hello, Siddrath Roy
          </Typography>

          <Box
            sx={{
              marginTop: "0px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                padding: {
                  xs: "20px 10px",
                  sm: "20px 20px",
                  md: "20px 50px",
                  lg: "20px 50px",
                },
                margin: "10px",
              }}
            >
              {dashboardCardsData?.map((item, index) => (
                <DashboardCards key={index} item={item} />
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
