import * as React from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

export default function TableDetailCard({ key, item }) {
  return (
    <Card sx={{ minWidth: 225, margin: "10px ", color: "blue" }} key={key}>
      <CardContent
        sx={{
          position: "relative",
          height: "140px",
        }}
      >
        <Typography
          sx={{ fontSize: 18, color: "black", fontWeight: 600 }}
          component="div"
          variant="h3"
        >
          {item.head}
        </Typography>
        <Typography
          variant="h3"
          component="div"
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            color: "black",

            // display:'flex',
            // justifyContent:'flex-end',
            // alignItems:"baseline",
          }}
        >
          {item.value}
        </Typography>
      </CardContent>
    </Card>
  );
}
