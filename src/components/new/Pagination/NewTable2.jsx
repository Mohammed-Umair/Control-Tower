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
    color:
      theme.palette.mode === "light"
        ? "rgba(0,0,0,.85)"
        : "rgba(255,255,255,0.65)",
  },
  "& .MuiPaginationItem-root": {
    borderRadius: 0,
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
    name: "WR",
    id: 1,
    warehouseCode: "R696",
    Scheduleappoinment: 8,
    expected: 3,
    rowSpan: 1,
  },
  {
    name: "WR",
    id: 2,
    warehouseCode: "R736",
    Scheduleappoinment: 4,
    expected: 8,
    rowSpan: 1,
  },
  {
    name: "WR",
    id: 3,
    warehouseCode: "R893",
    Scheduleappoinment: 5,
    expected: 0,
    rowSpan: 1,
  },
  {
    name: "SR",
    id: 4,
    warehouseCode: "R6147",
    Scheduleappoinment: 6,
    expected: 5,
    rowSpan: 1,
  },
  {
    name: "SR",
    id: 5,
    warehouseCode: "R842",
    Scheduleappoinment: 5,
    expected: 2,
    rowSpan: 1,
  },
  {
    name: "NR",
    id: 6,
    warehouseCode: "R726",
    Scheduleappoinment: 3,
    expected: 0,
    rowSpan: 1,
  },
  {
    name: "NR",
    id: 7,
    warehouseCode: "R431",
    Scheduleappoinment: 7,
    expected: 0,
    rowSpan: 1,
  },
  {
    name: "ER",
    id: 8,
    warehouseCode: "R896",
    Scheduleappoinment: 3,
    expected: 5,
    rowSpan: 1,
  },
];

// const CenteredCellRenderer = ({ field, value }) => {
//   let cellColor = "";
//   if (field === "expected") {
//     cellColor = value === 0 ? "red" : "#eda60c";
//   }

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         color: cellColor,
//       }}
//     >
//       {value}
//     </div>
//   );
// };

// const CenteredCellRenderer = ({ field, value }) => {
//     let cellColor = "";
//     if (field === "expected") {
//       cellColor = value === 0 ? "red" : "#eda60c";
//     }

//     return (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center", // Add this line to vertically center the content
//           color: cellColor,
//           height: "100%", // Ensure the cell takes the full height
//         }}
//       >
//         {value}
//       </div>
//     );
//   };


export default function NewTable2({setToogle}) {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 6,
    maxColumns: 4,
  });

  // const {data}= NewInboardTableDetails

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: PAGE_SIZE,
    page: 0,
  });
  const CenteredCellRenderer = ({ field, value, rowIndex }) => {
    let cellValue = value;
    let cellColor = "";
    let rowSpan = 1;
  
    if (field === "name") {
      const currentRow = rows[rowIndex];
  
      if (currentRow && currentRow.rowSpan !== undefined) {
        rowSpan = currentRow.rowSpan;
  
        if (rowIndex > 0 && rows[rowIndex - 1].name === value) {
          cellValue = "";
          rowSpan = 0;
        }
      }
    }
  
    if (field === "expected") {
      cellColor = value === 0 ? "red" : "#eda60c";
    }
    const handleClick = () => {
      if (field === "warehouseCode") {
        setToogle(true); // Update the state using the correct prop name
      }
    };
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: cellColor,
          height: "100%",
          rowSpan: rowSpan,
        }}
        onClick={handleClick} 
      >
        {cellValue}
      </div>
    );
  };
  
  return (
    <div style={{ height: 370, width: "100%" }}>
      <StyledDataGrid
        rows={rows}
        columns={[
          {
            id: "id",
            field: "name",
            headerName: "Zone",
            width: 150,
            renderCell: CenteredCellRenderer,
          },
          {
            id: "id",
            field: "warehouseCode",
            headerName: "Warehouse Code",
            width: 130,
            renderCell: CenteredCellRenderer,
            
          },

          {
            id: "id",
            field: "Scheduleappoinment",
            headerName: "Schedule Appointment",
            width: 136,
            renderCell: CenteredCellRenderer,
          },

          {
            id: "id",
            field: "expected",
            headerName: " Expected Delay's",
            width: 150,
            renderCell: CenteredCellRenderer,
          },

          // Add more columns as needed
        ]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[PAGE_SIZE]}
        slots={{
          pagination: CustomPagination,
        }}
      row
        disableColumnFilter
        disableColumnMenu
      />
    </div>
  );
}
