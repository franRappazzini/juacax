import "./Breadcrumb.css";

import { Breadcrumbs, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";

function Breadcrumb({ route }) {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: "1rem" }}>
      <Link className="link" to={"/"}>
        Home
      </Link>
      <Typography color="text.primary">{route}</Typography>
    </Breadcrumbs>
  );
}

export default Breadcrumb;
