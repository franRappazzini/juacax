import "./Form.css";

import React, { useState } from "react";

import { Button } from "@mui/material";
import InputsContainer from "../molecules/InputsContainer/InputsContainer";
import Modal from "../molecules/Modal/Modal";

const instanceForm = { name: "", email: "", password: "", textarea: "" };
const instanceError = { name: false, email: false, password: false }; // TODO ver error en consola

function Form() {
  const [data, setData] = useState(instanceForm);
  const [error, setError] = useState(instanceError);
  const [modal, setModal] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (validations()) return;
    else setModal(true);
  }

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: false });
  }

  function handleError(key, value) {
    setError({ ...error, [key]: value });
    return "error";
  }

  // TODO agregar regex name y pass
  function validations() {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!data.name.length) return handleError("name", "Required");

    if (!data.email.length) return handleError("email", "Required");
    if (!data.email.match(regexEmail))
      return handleError("email", "Wrong format");
    if (!data.password.length) return handleError("password", "Required");
  }

  return (
    <form className="form_container" onSubmit={handleSubmit}>
      <InputsContainer data={data} error={error} handleChange={handleChange} />

      <Modal data={data} open={modal} setOpen={setModal} />

      <div>
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default Form;
