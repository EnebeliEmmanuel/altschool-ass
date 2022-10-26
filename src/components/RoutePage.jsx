import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from './NotFound';
import Landing from './Landing';
import Navbar from './Navbar';

const RoutePage = () => {
  return (
    <>        
      <Navbar />
        <BrowserRouter>
            <Routes>
                <Route index element={<Landing />} />
                <Route path="Landing/*" element={<Landing />} />
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </BrowserRouter>    
    </>
  )
}

export default RoutePage

