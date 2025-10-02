import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from 'react'
import Dashboard from "./pages/Dashboard";
import Restaurant from "./pages/Restaurant";
import Booking from "./pages/Booking";
import Settings from "./pages/Settings";
import User from "./pages/User";
import Login from "./pages/login";
import Signup from "./pages/Signup";

const App = () => {
  return ( 
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/restaurant" element={<Restaurant/>}/>
    <Route path="/booking" element={<Booking/>}/>
    <Route path="/setting" element={<Settings/>}/>
    <Route path="/users" element={<User/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signin" element={<Signup/>}/> 
    
    </Routes>

    </BrowserRouter>
  )
}

export default App;