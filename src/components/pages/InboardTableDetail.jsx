import React from "react";
import Header from "../common/Header";
import SubHeader from "../common/SubHeader";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { dashboardCardsData } from "../data/dashboardCardData";
import DashboardCards from "../common/DashboardCards";
import { InboardTableDetails } from "../data/inboardTableDetails";
import TableDetailCard from "../common/TableDetailCard";
import TableDetailsIconCard from "../common/TableDetailsIconCard";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import ErrorIcon from "@mui/icons-material/Error";
import TableDetail1 from "../common/TableDetail1";
import TableDetail2 from "../common/TableDetail2";
import MYKPI1 from "../common/MYKPI1";
import MYKPI2 from "../common/MYKPI2";

const tableDetailWithIcon = [
  {
    head: "High Priority Alert ",
    value: 46,
    icon: <PriorityHighIcon />,
    color: "red",
  },
  {
    head: "Moderate Priority Alert",
    value: 36,
    icon: <PriorityHighIcon />,
    color: "#eda60c",
  },
];

const InboardTableDetail = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          mt: 1,
        }}
      >
        <SubHeader />
      </Box>

      <Grid container sx={{ p: 2 }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="h2"
            component="p"
            sx={{
              mt: 2,
              fontSize: {
                xs: "14px",
                sm: "14px",
                md: "20px",
                lg: "20px",
              },
              fontWeight: 600,
            }}
          >
            Po Validity Vs Appointment Schedule
          </Typography>
          <Grid container>
            {InboardTableDetails.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={2.4} lg={2.4}>
                  <TableDetailCard key={index} item={item} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <TableDetail1 />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} sx={{mt:1}}>
              {tableDetailWithIcon.map((item, index) => {
                return <TableDetailsIconCard key={index} item={item} />;
              })}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TableDetail2 />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Card
                    sx={{ minWidth: 250, height: 255, position: "relative",mt:2 }}
                  >
                    <CardContent
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: " 50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <MYKPI2 />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Card sx={{ minWidth: 250, height: 255, position: "relative",mt:2 }}>
                    <CardContent sx={{
                      position: "absolute",
                        bottom: 0,
                        left: " 50%",
                        transform: "translateX(-50%)",
                    }}>
                      <MYKPI1 />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default InboardTableDetail;
