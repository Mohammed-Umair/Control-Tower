import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useMemo, useState } from "react";

import { NewInboardTableDetails } from "./newTableData";

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

function createData(supplier, supplierScore, pono, sArival, arivalEXpe) {
  return {
    supplier,
    supplierScore,
    pono,
    sArival,
    arivalEXpe,
  };
}

const rows = [
  createData("Lokia", 6, 123, "10:00AM", "YES"),
  createData("Hamsung", 6, 323, "11:00AM", "YES"),
  createData("Kapple", 6, 223, "11:00AM", "YES"),
  createData("Twoplus", 10, 423, "12:00AM", "YES"),
  createData("Fedmi", 6, 223, "01:00AM", "NO"),
  createData("XI", 4, 923, "01:00AM", "NO"),
  createData("Towplus", 4, 483, "10:00AM", "YES"),
  createData("Dimaoi", 2, 3123, "3:00AM", "NO"),
  //   createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const NewTable = () => {
  
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
              sx={{ minWidth: 500 }}
              size="small"
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right">Supplier</StyledTableCell>
                  <StyledTableCell align="right">
                    Supplier Score
                  </StyledTableCell>
                  <StyledTableCell align="right">PO No</StyledTableCell>
                  <StyledTableCell align="right">
                    Schedule Arival
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    On-Time Arrival Expectancy
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.supplier}>
                    <StyledTableCell align="center">
                      {row.supplier}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.supplierScore}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.pono}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.sArival}
                    </StyledTableCell>

                    <StyledTableCell
                      align="center"
                      sx={{
                        color: row.arivalEXpe === "NO" ? "red" : "#eda60c",
                      }}
                    >
                      {row.arivalEXpe}
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

export default NewTable;
