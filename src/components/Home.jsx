import { Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { ThemeContext } from "../utils/contexts/ThemeContext";
import { useState, useContext } from "react";
const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
    <VStack>
    <Heading   
      className={`main ${theme}`}
    style={{
    
      fontSize: "36px",
      fontWeight: "600",
      color: "gray.500",
    }}>Welcome to Home page</Heading>
    </VStack>
    </>
  )
}

export default Home