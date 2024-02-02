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
  },
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    borderRight: `1px solid black`,
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    border: `1px solid black`,
  },
  "& .MuiDataGrid-cell": {
    color: (props) => (props.rowIndex < 3 ? "red" : "yellow"),
  },
  "& .MuiPaginationItem-root": {
    borderRadius: 0,
  },
"& .MuiDataGrid-cell-red-row":{
color:"red"
},
"& .MuiDataGrid-cell-yellow-row":{
  color:"#eda60c"
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
    name: "0-30%",
    id: 1,
    supplierscore: 0,
  },
  {
    name: "30-50%",
    id: 2,
    supplierscore: 2,
  },
  {
    name: "50-70%",
    id: 3,
    supplierscore: 4,
  },
  {
    name: "70-85%",
    id: 4,
    supplierscore: 6,
  },
  {
    name: "85-95%",
    id: 5,
    supplierscore: 4,
  },
  {
    name: "95-100%",
    id: 6,
    supplierscore: 8,
  },
];

export default function NewTable3() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 4,
    maxColumns: 2,
  });

  // const {data}= NewInboardTableDetails

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: PAGE_SIZE,
    page: 0,
  });

  const getRowClassName = (params) => {
    if (params.rowIndex < 3) {
      return "MuiDataGrid-cell-red-row";
    } else {
      return "MuiDataGrid-cell-yellow-row";
    }
  };
  return (
    <div style={{ height: 280, width: "100%" }}>
      <StyledDataGrid
        rows={rows}
        columns={[
          {
            id: "id",
            field: "name",
            headerName:
              "Suppiler Performance (On-Time Delivery Date+ Fullifillment Rate)",
            width: 316,
          },
          {
            id: "id",
            field: "supplierscore",
            headerName: "Supplier Score",
            width: 250,
          },

          // Add more columns as needed
        ]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[PAGE_SIZE]}
        slots={{
          pagination: CustomPagination,
        }}
        disableColumnFilter
        disableColumnMenu
        rowHeight={33}
        getRowClassName={getRowClassName}
      />
    </div>
  );
}
