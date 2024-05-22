import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Wrapper from "./molecules/global/wrapper";

const App = () => (
  <Routes>
    <Route path="/" element={<Wrapper/>} />
  </Routes>
);

export default App
