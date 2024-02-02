import * as React from "react";

import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { deepOrange, deepPurple } from "@mui/material/colors";
export default function TableDetailsIconCard({ key, item }) {
  return (
    <Card sx={{ minWidth: 225,height:188, margin: "10px ", color: "blue" }} key={key}>
      <CardContent
        sx={{
          position: "relative",
          height: "140px",
        }}
      >
        <Typography
          sx={{ fontSize: 18, color: "black" }}
          component="div"
          variant="h3"
        >
          {item.head}
        </Typography>

        <Avatar
          sx={{
            bgcolor: item.color,
            position: "absolute",
            top: "50%",
            left: " 50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {item.icon}
        </Avatar>
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
