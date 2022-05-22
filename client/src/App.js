import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateUser from "./components/user/create-user";
import CreateExcercise from "./components/exercise/create-exercise";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create/user" element={<CreateUser />} />
        <Route path="/add/exercise" element={<CreateExcercise />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
