import * as React from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

export default function DashboardCards({ key, item }) {
  return (
    <Card sx={{ minWidth: 225, marginTop: "10px ", color: "blue",boxShadow:1 }} key={key}>
      <CardContent>
        <Typography sx={{ fontSize: 16,fontWeight:500,color:"#061040",textAlign: "center", }}   variant="h3" component="div">
          {item.head}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{
            textAlign: "center",
            color:"#061040"
          }}
        >
          {item.value}
        </Typography>
      </CardContent>
    </Card>
  );
}
