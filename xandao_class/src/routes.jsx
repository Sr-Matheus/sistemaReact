import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavBar from "./components/nav";
import Home from "./pages/home";
import Student from "./pages/student";
import Teacher from "./pages/teacher";



const RoutesApp = () =>
{
    return(
        <>
            <BrowserRouter>
                <MyNavBar></MyNavBar>
                <Routes>
                    <Route path="/" element={ <Home></Home> } ></Route>
                    <Route path="/alunos" element={ <Student></Student> } ></Route>
                    <Route path="/professores" element={ <Teacher></Teacher> } ></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default RoutesApp;