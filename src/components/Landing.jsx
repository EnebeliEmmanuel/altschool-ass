import React from 'react'
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { Box, Button, Flex, Image, Stack, VStack } from "@chakra-ui/react";
import Home from './Home';
import Layout from './Layout';
import NotFound from './NotFound';

const Landing = () => {
  // const navigate = useNavigate();

  return (
    <>
   
     {/*Nav links*/}
     <VStack
      
      >
        <Flex>
        <Link
          to="/landing/users"
          style={{
            marginRight: "50px",
            fontSize: "16px",
            fontWeight: "600",
            color: "gray.500",
          }}
        >
          Users
        </Link>

        <Link
          to="/landing/home"
          style={{
            marginRight: "50px",
            fontSize: "16px",
            fontWeight: "600",
            color: "gray.500",
          }}
        >
          Home
        </Link>
        </Flex>
      {/* <button onClick={() => navigate('/landing/home')}>click to display home page</button>
      <br />
      <button onClick={() => navigate('/landing/users')}>Click to get user's list </button> */}
       </VStack>

      <Routes>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path="users" element={<Layout />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
     
  
    </>
  )
}

export default Landing