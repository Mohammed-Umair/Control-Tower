import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import InputBase from "@mui/material/InputBase";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import DatePickerCom from "./DatePikerCom";

export default function NewSubHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#bcc4eb",
          borderRadius: 2,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <FormControl
            sx={{
              width: "200px",
              color: "blue",
            }}
          >
            <InputLabel id="demo-simple-select-label">
              {" "}
              Warehouse Code
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //   value={Zone}
              label="Zone"
              //   onChange={handleChange}
              sx={{
                borderRadius: "15px 0px 0px 15px",
              }}
            >
              <MenuItem value={10}>Country Level</MenuItem>
              <MenuItem value={20}>Rigional Level</MenuItem>
              <MenuItem value={30}>Warehouse Level</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              width: "190px",
              color: "blue",
            }}
          >
            <InputLabel id="demo-simple-select-label">Zone</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //   value={Zone}

              label="Warehouse Code"
              //   onChange={handleChange}
              sx={{
                borderRadius: "15px 0px 0px 15px",
              }}
            >
              <MenuItem value={10}>A01</MenuItem>
              <MenuItem value={20}>A02</MenuItem>
              <MenuItem value={30}>A03</MenuItem>
              <MenuItem value={30}>A04</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              width: "190px",
              color: "blue",
            }}
          >
            <InputLabel id="demo-simple-select-label">Vendor</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //   value={Zone}

              label="Warehouse Code"
              //   onChange={handleChange}
              sx={{
                borderRadius: "15px 0px 0px 15px",
              }}
            >
              <MenuItem value={10}>A01</MenuItem>
              <MenuItem value={20}>A02</MenuItem>
              <MenuItem value={30}>A03</MenuItem>
              <MenuItem value={30}>A04</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
