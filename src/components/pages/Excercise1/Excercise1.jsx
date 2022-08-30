import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

import React from "react";
import { completeCarton } from "../../../utils/functions";

function Excercise1() {
  return (
    <main style={{ padding: "2rem" }}>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, display: "flex" }}
          aria-label="simple table"
        >
          {completeCarton().map((col, i) => (
            <TableBody
              key={i}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {col.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    align="center"
                    sx={{ height: "2rem", width: "2rem", p: 0 }}
                  >
                    {row}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </main>
  );
}

export default Excercise1;
