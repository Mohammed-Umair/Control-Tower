import * as React from "react";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

function customCheckbox(theme) {
  return {
    "& .MuiCheckbox-root svg": {
      width: 16,
      height: 16,
      backgroundColor: "transparent",
      border: `1px solid ${
        theme.palette.mode === "light" ? "#d9d9d9" : "rgb(67, 67, 67)"
      }`,
      borderRadius: 2,
    },
    "& .MuiCheckbox-root svg path": {
      display: "none",
    },
    "& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg": {
      backgroundColor: "#1890ff",
      borderColor: "#1890ff",
    },
    "& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after": {
      position: "absolute",
      display: "table",
      border: "2px solid #fff",
      borderTop: 0,
      borderLeft: 0,
      transform: "rotate(45deg) translate(-50%,-50%)",
      opacity: 1,
      transition: "all .2s cubic-bezier(.12,.4,.29,1.46) .1s",
      content: '""',
      top: "50%",
      left: "39%",
      width: 5.71428571,
      height: 9.14285714,
    },
    "& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after":
      {
        width: 8,
        height: 8,
        backgroundColor: "#1890ff",
        transform: "none",
        top: "39%",
        border: 0,
      },
  };
}

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: "1px solid black",
  // border: 0,

  color:
    theme.palette.mode === "light"
      ? "rgba(0,0,0,.85)"
      : "rgba(255,255,255,0.85)",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  WebkitFontSmoothing: "auto",
  letterSpacing: "normal",
  "& .MuiDataGrid-columnsContainer": {
    backgroundColor: theme.palette.mode === "light" ? "#fafafa" : "#1d1d1d",
    border: "1px solid black",
  },
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    border: `1px solid black`,
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    border: `1px solid black`,
  },
  "& .MuiDataGrid-cell": {
    color:
      theme.palette.mode === "light"
        ? "rgba(0,0,0,.85)"
        : "rgba(255,255,255,0.65)",
  },
  "& .MuiPaginationItem-root": {
    borderRadius: 0,
  },

  "& .MuiDataGrid-cellYes": {
    color: "#eda60c",
  },
  "& .MuiDataGrid-cellNo": {
    color: "red",
  },

  ...customCheckbox(theme),
}));

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      // @ts-expect-error
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

const PAGE_SIZE = 5;

const rows = [
  {
    id: "Lokia",
    SuppilerScore: 6,
    PONO: 234,
    ScheduleArival: "10:00AM",
    ontime: "YES",
  },
  {
    id: "Hamsung",
    SuppilerScore: 6,
    PONO: 254,
    ScheduleArival: "11:00AM",
    ontime: "YES",
  },
  {
    id: "Kapple",
    SuppilerScore: 6,
    PONO: 454,
    ScheduleArival: "11:00AM",
    ontime: "YES",
  },
  {
    id: "Twoplus",
    SuppilerScore: 8,
    PONO: 754,
    ScheduleArival: "12:00AM",
    ontime: "YES",
  },
  {
    id: "Fedmi",
    SuppilerScore: 4,
    PONO: 254,
    ScheduleArival: "1:00AM",
    ontime: "NO",
  },
  {
    id: "XI",
    SuppilerScore: 6,
    PONO: 554,
    ScheduleArival: "1:00AM",
    ontime: "NO",
  },
  {
    id: "Twoplus",
    SuppilerScore: 4,
    PONO: 254,
    ScheduleArival: "2:00AM",
    ontime: "YES",
  },
  {
    id: "Diamoi",
    SuppilerScore: 4,
    PONO: 954,
    ScheduleArival: "3:00AM",
    ontime: "NO",
  },
];
export default function NewTable1() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 7,
    maxColumns: 5,
  });

  // const {data}= NewInboardTableDetails

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: PAGE_SIZE,
    page: 0,
  });

  const getCellValueClassName = (params) => {
    const cellValue = params.value;
    if (cellValue === "YES") {
      return "MuiDataGrid-cellYes";
    } else if (cellValue === "NO") {
      return "MuiDataGrid-cellNo";
    }
    return "";
  };

  return (
    <div style={{ height: 390, width: "100%" }}>
      <StyledDataGrid
        rows={rows}
        columns={[
          { field: "id", headerName: "Suppiler", width: 150 },
          { field: "SuppilerScore", headerName: "Suppiler Score", width: 90 },
          { field: "PONO", headerName: "PO No", width: 90 },
          {
            field: "ScheduleArival",
            headerName: "Schedule Arrival",
            width: 150,
          },

          {
            field: "ontime",
            headerName: "On-Time Arrival Expectancy",
            width: 86,
          },

          // Add more columns as needed
        ]}
        paginationModel={paginationModel}
        getCellClassName={getCellValueClassName}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[PAGE_SIZE]}
        slots={{
          pagination: CustomPagination,
        }}
        disableColumnFilter
        disableColumnMenu
      />
    </div>
  );
}
