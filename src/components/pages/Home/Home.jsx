import "./Home.css";

import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleNavigate(route) {
    return () => navigate(route);
  }

  return (
    <main className="home_container">
      <h1>
        Bienvenido al challenge de{" "}
        <a
          href="https://www.youtube.com/c/juacaxDev"
          target="_blank"
          rel="noopener noreferrer"
          className="link_home"
        >
          juacaxDev
        </a>
        .
      </h1>

      <section className="exBtns_container">
        <Button
          variant="outlined"
          onClick={handleNavigate("/bingo")}
          sx={{ m: "0 0.5rem" }}
        >
          Ejercicio 1
        </Button>
        <Button
          variant="outlined"
          onClick={handleNavigate("/form")}
          sx={{ m: "0 0.5rem" }}
        >
          Ejercicio 2
        </Button>
      </section>

      <p>
        Creado por{" "}
        <a
          href="https://rappazzini-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="link_home"
        >
          Francisco Rappazzini
        </a>
        .
      </p>
    </main>
  );
}

export default Home;
