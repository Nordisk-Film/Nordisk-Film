import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../PageComponents/HomePageComponent/HomePage";
import { AboutPage } from "../../PageComponents/AboutPageComponent/AboutPage";
import { ContactPage } from "../../PageComponents/ContactPageComponent/ContactPage";
import { PosterDetail } from '../../PageComponents/PosterDetailPage/PosterDetail.jsx';

export const Router = () => {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/posters/:id" element={<PosterDetail />} /> {/* Ensure this route is correct */}
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Contact" element={<ContactPage />} />
    </Routes>
  )
}
