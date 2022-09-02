import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from '../Components/Home'
import { SingleData } from '../Components/SingleData'
import { DoctorFormTAble } from '../Components/TableForm'

function AllRoutes() {
  return (
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/doctor" element={<DoctorFormTAble/>} />
    <Route path="/doctor/:id" element={<SingleData/>} />
   </Routes>
  )
}

export default AllRoutes