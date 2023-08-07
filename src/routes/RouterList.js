import React from "react";
import PublicHeader from "../components/common/Header/PublicHeader";
import Footer from "../components/common/Footer";
import { Route, Routes } from "react-router-dom";
import TitleWrapper from "./TitleWrapper";
import Home from "../Pages/Home";
import Studio3D from "../Pages/Studio3D";
import Pricing from "../Pages/Pricing";
import AboutAR from "../Pages/AboutAR";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Congigurator from "../Pages/Congigurator";
import BookADemo from "../Pages/BookADemo";
import UserDashBoard from "../Pages/UserDashBoard";
import AdminDashboard from "../Pages/AdminDashboard";
import Page404 from '../components/common/ErrorPage404.js'

function RouterList() {
  const modules = [
    { path: "/", element: <Home />, title: "Bigsurmoon" },
    { path: "/3d-studio", element: <Studio3D />, title: "Bigsurmoon" },
    { path: "/pricing", element: <Pricing />, title: "Bigsurmoon" },
    { path: "/about-ar", element: <AboutAR />, title: "Bigsurmoon" },
    { path: "/configurator", element: <Congigurator />, title: "Bigsurmoon" },
    { path: "/book-a-demo", element: <BookADemo />, title: "Bigsurmoon" },
    

  ];

  return (
    <>
     
      <Routes>
        <Route path="/error" element={<Page404 />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/user-dashboard' element={<UserDashBoard />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        {modules.map(({ title, path, element }) => (
          <Route
            path={path}
            key={path}
            element={
              <>
            <PublicHeader />
            <TitleWrapper title={title}> {element}</TitleWrapper>
            <Footer />
            </>
          }
          />
        ))}
       
      </Routes>

      

    </>
  );
}

export default RouterList;
