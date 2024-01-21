import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar.jsx'
import Trend from './Components/Trend.jsx'
import List from './Components/List.jsx'
import Creators from './Components/Creators.jsx'
import Carusel from './Components/carusel.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Marketplase from './Components/Marketplase.jsx'
import Connectawallet from './Components/Connectawallet.jsx'
import Rankings from './Components/Rankings.jsx'
import Animation from './Components/Animation.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(



  


  <>

<div className="car" >
  
<div class="sk-chase">
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>


</div >

  

</div>
{
    <BrowserRouter>
      <Navbar />
      <Trend />
      <Creators />
      <Carusel />
      <List />

      <Routes>

        <Route path="/" element={<Marketplase />}></Route>
        <Route path="/Rankings" element={<Rankings />}></Route>
        <Route path="/Connectawallet" element={<Connectawallet />}></Route>
      </Routes>

    </BrowserRouter>
}
  </>



)
