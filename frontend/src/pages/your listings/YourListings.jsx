import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "roomTitle",
    headerName: "Item name",
    width: 350,
    editable: true,
  },
  {
    field: "checkinDate",
    headerName: "Price",
    width: 150,
    editable: true,
  },
  {
    field: "checkoutDate",
    headerName: "Created at",
    width: 150,
    editable: true,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => (
      <div>
        <Button
          variant="contained"
          color="primary"
          //   onClick={() => confirmBooking(params.row.id)}
          style={{ marginRight: "10px" }}
        >
          update
        </Button>
        <Button
          variant="contained"
          color="secondary"
          //   onClick={() => deleteBooking(params.row.id)}
        >
          Hide
        </Button>
        <Button
          variant="contained"
          color="secondary"
          //   onClick={() => deleteBooking(params.row.id)}
        >
          Delete
        </Button>
      </div>
    ),
  },
];
function YourListings() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        // rows={bookings}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        // pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default YourListings;
