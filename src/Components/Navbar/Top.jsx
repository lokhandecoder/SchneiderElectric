import React from 'react'
import {Routes, Route} from "react-router-dom"
import Topheader from './Topheader'

function Top() {
  return (
    <Routes>
        <Route path="/"></Route>
        <Route path="/request" element={<Topheader />}></Route>
        <Route path="/formlist" element={<Topheader />}></Route>
        <Route path="/skills" element={<Topheader />}></Route>
        <Route path="/toolkit" element={<Topheader />}></Route>
        <Route path="/detail" element={<Topheader />}></Route>
        <Route path="coachlist" element={<Topheader />}></Route>
    </Routes>
  )
}

export default Top