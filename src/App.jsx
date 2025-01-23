import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import { Footer } from './Components/FooterComponent/Footer.jsx';
import { Main } from './Components/MainComponent/Main.jsx';
import { Router } from './Components/RouterComponent/Router.jsx';
import { Navbar} from "./Components/NavComponent/Nav.jsx"
import { Header } from './Components/HeaderCommponent/Header.jsx';

function App() {
  return (
   <>
   <Navbar/>
   <Header/>
   <Main>
    <Router/>
  </Main>
   <Footer/>

   </>
  )
}

export default App
