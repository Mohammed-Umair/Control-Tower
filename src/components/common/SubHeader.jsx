import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import DatePickerCom from "./DatePikerCom";

const CenteredInputBase = styled(InputBase)({
  "&::placeholder": {
    textAlign: "center",
  },
});

export default function SubHeader() {
  return (
    <Box sx={{ flexGrow: 1,p:"5px" }}>
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
            justifyContent: "space-between",
            alignItems: { xs: 'flex-start', sm: 'center' }, // Align vertically on mobile
            flexDirection: { xs: 'column', sm: 'row' }, // Stack items vertically on mobile
          }}
        >
          <FormControl
            sx={{
              width: { xs: "100%", sm: "150px" }, // Adjust width for mobile
              mt: { xs: 1, sm: 0 }, // Add margin for better spacing on mobile
            }}
          >
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                mt: "-6px",
              }}
            >
              Zone
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={Zone}
              label="Zone"
              // onChange={handleChange}
              size="small"
            >
              <MenuItem value={10}>Country Level</MenuItem>
              <MenuItem value={20}>Rigional Level</MenuItem>
              <MenuItem value={30}>Warehouse Level</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              width: { xs: "100%", sm: "190px" }, // Adjust width for mobile
              mt: { xs: 1, sm: 0 }, // Add margin for better spacing on mobile
            }}
          >
            <InputLabel id="demo-simple-select-label">
              Warehouse Code
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={Zone}
              label="Warehouse Code"
              // onChange={handleChange}
            >
              <MenuItem value={10}>A01</MenuItem>
              <MenuItem value={20}>A02</MenuItem>
              <MenuItem value={30}>A03</MenuItem>
              <MenuItem value={30}>A04</MenuItem>
            </Select>
          </FormControl>
          <DatePickerCom />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
