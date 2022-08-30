import React from "react";
import { TextField } from "@mui/material";

function InputsContainer({ handleChange, data, error }) {
  return (
    <>
      <TextField
        label="Name"
        variant="outlined"
        placeholder="Francisco Rappazzini"
        size="small"
        // required
        name="name"
        onChange={handleChange}
        value={data.name}
        error={error.name}
        helperText={error.name && error.name}
      />

      <TextField
        label="Email"
        type="email"
        variant="outlined"
        placeholder="fran_rappa@outlook.com"
        size="small"
        // required
        name="email"
        onChange={handleChange}
        value={data.email}
        error={error.email}
        helperText={error.email && error.email}
      />

      <TextField
        label="Password"
        type="password"
        variant="outlined"
        size="small"
        // required
        name="password"
        onChange={handleChange}
        value={data.password}
        error={error.password}
        helperText={error.password && error.password}
      />

      <TextField
        label="Text Area"
        multiline
        rows={3}
        name="textarea"
        onChange={handleChange}
        value={data.textarea}
      />
    </>
  );
}

export default InputsContainer;
