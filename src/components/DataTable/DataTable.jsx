import React from "react";
import "./DataTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


function createData(name, trackingId, date, status, style) {
  return { name, trackingId, date, status, style };
}

function makeStyleClassName(status) {
  switch (status) {
    case "Approved":
      return "DataTable__status--approved"
    case "Pending":
      return "DataTable__status--pending"
    case "Delivered":
      return "DataTable__status--delivered"
  }
}

const DataTable = () => {
  const rows = [
    createData('Frozen yoghurt', 18908424, "2 March 2022", "Approved", {}),
    createData('Ice cream sandwich', 18908424, "2 March 2022", "Approved", {}),
    createData('Eclair', 18908424, "2 March 2022", "Pending", {}),
    createData('Cupcake', 18908424, "2 March 2022", "Delivered", {}),
  ];
  return (
    <div className="Table">
      <h3>Recent Orders</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className={`DataTable__status ${makeStyleClassName(row.status)}`}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="left" className="DataTable__detail">{"Detail"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
