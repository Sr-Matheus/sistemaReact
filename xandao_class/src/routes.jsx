import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavBar from "./components/nav";
import Home from "./pages/home";
import Student from "./pages/student";
import StudentAdd from "./pages/student/add";
import StudentEdit from "./pages/student/edit";
import Teacher from "./pages/teacher";

const RoutesApp = () => {
  return (
    <>
      <BrowserRouter>
        <MyNavBar></MyNavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alunos" element={<Student />} />
          <Route path="/alunos/add" element={<StudentAdd />} />
          <Route path="/alunos/edit" element={<StudentEdit />} />
          <Route path="/professores" element={<Teacher />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesApp;
