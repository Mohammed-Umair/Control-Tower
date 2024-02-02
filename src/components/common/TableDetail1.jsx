import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "darkgrey",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  Warehouse,
  zone,
  pono,
  poquality,
  suppliler,
  sArival,
  Edate,
  ValidatyStatus,
  Action
) {
  return {
    Warehouse,
    zone,
    pono,
    poquality,
    suppliler,
    sArival,
    Edate,
    ValidatyStatus,
    Action,
  };
}

const rows = [
  createData(
    "R696",
    "WR",
    123,
    56,
    "Lokia",
    "10:00AM",
    "21-02-2023",
    "Expired"
  ),
  createData(
    "R696",
    "WR",
    123,
    56,
    "Lokia",
    "10:00AM",
    "21-02-2023",
    "Expired"
  ),
  createData(
    "R696",
    "WR",
    123,
    56,
    "Lokia",
    "10:00AM",
    "21-02-2023",
    "Expired"
  ),
  createData(
    "R696",
    "WR",
    123,
    56,
    "Lokia",
    "10:00AM",
    "21-02-2023",
    "Expiredd"
  ),
  createData(
    "R696",
    "WR",
    123,
    56,
    "Lokia",
    "10:00AM",
    "21-02-2023",
    "Expiredd"
  ),
  createData(
    "R696",
    "WR",
    123,
    56,
    "Lokia",
    "10:00AM",
    "21-02-2023",
    "Expiredd"
  ),
  //   createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const TableDetail1 = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            p: 2,
          }}
        >
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 700 }}
              size="small"
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell>Warehouse code</StyledTableCell>
                  <StyledTableCell align="right">Zone</StyledTableCell>
                  <StyledTableCell align="right">PO NO</StyledTableCell>
                  <StyledTableCell align="right">PO Quality</StyledTableCell>
                  <StyledTableCell align="right">Supplier</StyledTableCell>
                  <StyledTableCell align="right">
                    Schedule Arival
                  </StyledTableCell>
                  <StyledTableCell align="right">EXpiry Date</StyledTableCell>
                  <StyledTableCell align="right">
                    PO Validaty status
                  </StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.Warehouse}>
                    <StyledTableCell component="th" scope="row">
                      {row.Warehouse}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.zone}</StyledTableCell>
                    <StyledTableCell align="right">{row.pono}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.poquality}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.suppliler}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.sArival}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.Edate}</StyledTableCell>

                    <StyledTableCell align="right" sx={{ color: row.ValidatyStatus==="Expired"?"red":"#eda60c" }}>
                      {row.ValidatyStatus}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Button variant="contained" color="inherit" sx={{
                        fontSize:"12px",textTransform:"capitalize"
                      }}>Acknowledge</Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default TableDetail1;
