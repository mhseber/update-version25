import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Home from "./components/Home.jsx";
import JoinUs from "./components/JoinUs.jsx";
import AuthLayout from "./Layout/AuthLayout.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Contact from "./components/Contact.jsx";
import MetUp from "./components/MetUp.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="joinUs" element={<JoinUs />} />
      <Route index element={<Contact />} />
      <Route path="metUp" element={<MetUp />} />
  

  <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route>

    </Routes>
  </BrowserRouter>
);
