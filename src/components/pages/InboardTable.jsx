import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "lightslategray",
    color: theme.palette.common.black,
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
  "& td": {
    padding: '8px', // Adjust the padding value as per your requirement
  },
}));

function createData(sno, name, btn) {
  return { sno, name, btn };
}

const rows = [
  createData(1, "Po Validity Vs Appointment Shedule", "/inboardTableDetail"),
  createData(2, " Appointment vs Vehicle"),
  createData(3, " Out for Pickup Performence "),
  createData(4, "Vehicle Utilization over a month "),
  createData(5, "Vehicle Utilization & Pickup optimization "),
  createData(6, " GPS Monitoring"),
  createData(7, " First Pickup Attempt Success Ratio"),

  createData(8, " First Pickup Attempt"),
  createData(9, " Overall Pickup Performence "),
];

export default function InboardTable() {
  const navigate = useNavigate();
  const handleinboardTableDetail = (row) => {
    navigate(row.btn);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Sno.</StyledTableCell>
            <StyledTableCell align="center">KPI Name</StyledTableCell>
            <StyledTableCell align="center">Check</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.sno}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.sno}
              </StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  sx={{
                    borderRadius: 4,
                  }}
                  color="inherit"
                  variant="contained"
                  endIcon={
                    <SearchIcon
                      sx={{
                        rotate: "90deg",
                      }}
                    />
                  }
                  onClick={() => handleinboardTableDetail(row)}
                >
                  View
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
