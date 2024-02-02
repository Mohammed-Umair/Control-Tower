import { Box, Button, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";

import DashboardCards from "./common/DashboardCards";
import { dashboardCardsData } from "./data/dashboardCardData";
import { useNavigate } from "react-router";
import Header from "./common/Header";
import RightSider from "./common/RightSider";
import SubHeader from "./common/SubHeader";

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

      <Grid container sx={{ p: 2 }}>
        <Grid item xs={1} sm={3} md={3} lg={3}>
       
           <RightSider />
        </Grid>
        <Grid item xs={11} sm={9} md={9} lg={9}>
          <SubHeader/>
          <Typography
          variant="h6"
          component="p"
          sx={{
            
           mt:2,
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
              // padding: "05px 20px 10px 20px",
            }}
          >
            <Box
              sx={{
                //   border: "1px solid black",
                // width: "900px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                padding: {
                  xs: "20px 50px",
                  sm: "20px 50px",
                  md: "20px 20px",
                  lg: "20px 20px",
                },
                margin: "10px",
              }}
            >
              {dashboardCardsData?.map((item, index) => {
                console.log("dashboardCardsData", dashboardCardsData);
                return <DashboardCards key={index} item={item} />;
              })}
            </Box>
          </Box>
        </Grid>
      </Grid>

      
    </>
  );
};

export default Dashboard;
