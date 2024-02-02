import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import Dashboard from '../components/Dashboard'
import InboardTransportation from '../components/pages/InboardTransportation'
import InboardTableDetail from '../components/pages/InboardTableDetail'
import NewTablePage from '../components/new/NewTablePage'
import PoExucation from '../components/pages/PoExucation'
import CustomizedAccordions from '../components/Accordion'






const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    {/* <Route path='/' element={<CustomizedAccordions/>}/> */}

    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/inboardTransportation' element={<InboardTransportation/>}/>
    <Route path='/poexucation' element={<PoExucation/>}/>

    <Route path='/inboardTableDetail' element={<InboardTableDetail/>}/>
    <Route path='/newTablePage' element={<NewTablePage/>}/>
    

  

   




    </Routes>
    </BrowserRouter>
  )
}

export default Routing