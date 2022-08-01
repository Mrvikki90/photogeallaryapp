import './App.css';
import * as React from 'react';
import { ChakraProvider} from "@chakra-ui/react";
import Nav from './Components/Nav';
import Homepage from './Components/Homepage';
import Router from './Components/Router';
import Wrapper from './Components/Wrapper';


const App = () =>{
  return (
    <>
   <ChakraProvider>
   <Router/>
   </ChakraProvider>
   </>
  );
}

export default App;

{/* <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/aboutus" element={<AboutUs/>}/>
    <Route path="/contactus" element={<ContactUs/>}/>
    </Routes> */}
