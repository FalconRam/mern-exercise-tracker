import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateUser from "./components/user/create-user";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create/user" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
