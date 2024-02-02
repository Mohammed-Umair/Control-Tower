import { CheckBox } from "@mui/icons-material";
import {
  Box,
  Button,
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
  createData("WR", "R696", 23, 56, 141, 8),
  createData("WR", "R696", 14, 56, 410, 9),
  createData("SR", "R696", 13, 56, 110, 3),
  createData("SR", "R696", 12, 56, 201, 2),
  createData("NR", "R696", 30, 56, 501, 6),
  createData("ER", "R696", 27, 56, 301, 1),

  //   createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const TableDetail2 = () => {
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
                  <StyledTableCell>Zone</StyledTableCell>
                  <StyledTableCell align="right">
                    Warehouse code
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Total Pending PO
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    PO Ariving Today
                  </StyledTableCell>
                  <StyledTableCell align="right">PO Quality</StyledTableCell>
                  <StyledTableCell align="right">Expired POs </StyledTableCell>
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

export default TableDetail2;
