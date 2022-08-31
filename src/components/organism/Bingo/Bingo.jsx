import "./Bingo.css";

import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";

import { completeCarton } from "../../../utils/functions";

function Bingo() {
  const [carton, setCarton] = useState(completeCarton());

  function handleClick() {
    setCarton(completeCarton());
  }

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ width: "fit-content", margin: "0 auto" }}
      >
        <Table sx={{ display: "flex" }} aria-label="simple table">
          {carton.map((col, i) => (
            <TableBody
              key={i}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {col.map((row, i) => (
                <TableRow key={i}>
                  <TableCell
                    align="center"
                    sx={{
                      height: "5rem",
                      width: "5rem",
                      p: 0,
                      border: "1px solid black",
                      fontSize: "2rem",
                      backgroundColor: row === "" && "lightblue",
                    }}
                  >
                    {row}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ))}
        </Table>
      </TableContainer>

      <div className="btn_container">
        <Button onClick={handleClick} variant="outlined">
          Update
        </Button>
      </div>
    </>
  );
}

export default Bingo;
