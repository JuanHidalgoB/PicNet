import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import {Post} from './Components/Post'
import moduleName from 'module'
import NavBar from "./Components/NavBar";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};
