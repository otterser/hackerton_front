import React from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import NextPage from "./pages/NextPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/next" element={<NextPage />} />
    </Routes>
  );
}