import { Box } from "@chakra-ui/react"
import { FC } from "react"
import Nav from "./Nav"
import * as React from 'react';
import Homepage from "./Homepage";


const Wrapper : FC<any> = ({children}) => {
  return (
    <>
    <Nav/>
    {children}
    </>
  )
}

export default Wrapper