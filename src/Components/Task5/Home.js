import React from 'react'
import Footer from './Footer'
import HomeDesc from './HomeDesc'
import HomeNav from './HomeNav'
import Contact from './Contact'
import Store from './Store'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function Home() {
  return (
    <div>
      <Router>
      <HomeNav/>
        <Routes>
        <Route path='/' element={<HomeDesc/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/store' element={<Store/>}/>
        </Routes>
        <Footer/>
      </Router>
      


      </div>
  )
}

export default Home
