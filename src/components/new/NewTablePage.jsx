import React, { useMemo, useState } from "react";
import Header from "../common/Header";

import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import NewSubHeader from "../common/NewSubHeader";
import { NewInboardTableDetails } from "../new/newTableData";
import TableDetailCard from "../common/TableDetailCard";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import NewTable from "../new/NewTable";
import MYKPI1 from "../common/MYKPI1";
import NewTable1 from "./Pagination/NewTable1";
import NewTable2 from "./Pagination/NewTable2";
import NewTable3 from "./Pagination/NewTable3";
import Map from "./Map";
import { FormatColorResetOutlined } from "@mui/icons-material";

const NewTablePage = () => {
  const [toogle, setToogle] = useState(false);

  return (
    <>
      <Header />
      <Box
        sx={{
          mt: 1,
        }}
      >
        <NewSubHeader />
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
            <LocationOnIcon
              sx={{
                color: "red",
              }}
            />
            Supplier Lead Time
          </Typography>
          <Grid container>
            {NewInboardTableDetails.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={2.4} lg={2.4}>
                  <TableDetailCard key={index} item={item} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} mt={2}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Card sx={{ minWidth: 400, height: 410, mt: 2, ml: 2, p: 0 }}>
                <CardContent>
                  <NewTable2 setToogle={setToogle} />
                </CardContent>
              </Card>
              <Card sx={{ minWidth: 400, height: 305, mt: 2, ml: 2, p: 0 }}>
                <CardContent>
                  <NewTable3 />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Grid container spacing={1}>
                <Card
                  sx={{
                    minWidth: { xs: 390, sm: 600 },
                    height: { xs: 400, sm: 730 },
                    mt: 3,
                    ml: 2,
                    p: 0,
                  }}
                >
                  <CardContent>
                    <Map />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {toogle && (
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Card sx={{ minWidth: 400, height: 410, mt: 2, ml: 2, p: 0 }}>
                  <CardContent>
                    <NewTable1 />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Grid container spacing={1} mt={5}>
                  <MYKPI1 />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default NewTablePage;
