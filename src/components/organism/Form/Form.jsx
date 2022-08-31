import "./Form.css";

import React, { useState } from "react";

import { Button } from "@mui/material";
import InputsContainer from "../../molecules/InputsContainer/InputsContainer";
import Modal from "../../molecules/Modal/Modal";

const instanceForm = { name: "", email: "", password: "", textarea: "" };
const instanceError = { name: false, email: false, password: false };

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

  function validations() {
    const regexName = /^[a-zA-Z\s]*$/;
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!data.name.length) return handleError("name", "Required");
    if (!data.name.match(regexName)) return handleError("name", "Invalid name");
    if (!data.email.length) return handleError("email", "Required");
    if (!data.email.match(regexEmail))
      return handleError("email", "Wrong format");
    if (!data.password.length) return handleError("password", "Required");
    // if (!data.password.match(regexPass))
    //   return handleError(
    //     "password",
    //     "Must contain 8 characters and at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 symbol"
    //   );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
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
