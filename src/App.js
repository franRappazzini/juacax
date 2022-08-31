import { Route, Routes } from "react-router-dom";

import Excercise1 from "./components/pages/Excercise1/Excercise1";
import Excercise2 from "./components/pages/Excercise2/Excercise2";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bingo" element={<Excercise1 />} />
        <Route path="/form" element={<Excercise2 />} />
      </Routes>
    </>
  );
}

export default App;
