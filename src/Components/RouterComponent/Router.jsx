import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../PageComponents/HomePageComponent/HomePage";
import { PosterPage } from "../../PageComponents/PosterPageComponent/PosterPage";
import { AboutPage } from "../../PageComponents/AboutPageComponent/AboutPage";
import { ContactPage } from "../../PageComponents/ContactPageComponent/ContactPage";


export const Router = () => {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/Posters" element={<PosterPage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Contact" element={<ContactPage />} />
    </Routes>
  )
}
