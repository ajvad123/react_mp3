import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Landing from './Pages/Landing'
import Dashboard from './Pages/Dashboard'
import History from './Pages/History'
import Header from './Components/Header'
import Footer from './Components/Footer'

import { Router,Route, Routes } from 'react-router-dom'



function App() {

  return (
    <>
         
         <Header/>

         <Routes>

            {/* localhost:5217/land (root componentilek vekkan) */    }    
            <Route path='/' Component={Landing}/>

            {/* localhost:5217/Dash */}
            <Route path='/Dash' Component={Dashboard}/>

            {/* localhost:5217/His*/}


            <Route path='/his' Component={History}/>



         </Routes>

        <Footer/>
    </>
  )
}

export default App
