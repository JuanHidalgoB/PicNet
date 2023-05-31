import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import {Chat} from './Pages/Chat'
import {SignUp} from './Pages/SignUp'
import { Search } from "./Pages/Search";
import { Profile } from "./Pages/Profile";
import { Create } from "./Pages/Create";


export const App = () => {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/chat" element={<Chat/>} />
      <Route path="/signup" element={<SignUp/>} />

      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/search" element={<Search />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
};
