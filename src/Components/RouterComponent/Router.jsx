import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../PageComponents/HomePageComponent/HomePage";
import { PosterPage } from "../../PageComponents/PosterPageComponent/PosterPage";


export const Router = () => {

    return (
    <Routes>
      <Route index element={<HomePage/>}/> 
      <Route path="/Posters" element={<PosterPage />} /> {/* <Route element={<PosterPage/>}/> */}

    </Routes>
    )
  }
  