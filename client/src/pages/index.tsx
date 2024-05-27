import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/** importing our pages */
import Projects from "./projects";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Projects />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}
