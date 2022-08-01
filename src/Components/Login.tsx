import * as React from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
  Box
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { json } from 'stream/consumers';


const Login = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  const Navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
        Navigate('/ImageUpload');
    }
},[]);



const [email , setEmail] = useState("");
const [password , setPassword] = useState("");    

interface data {
  email : string,
  name : string,
  password : string,
  _id : string
}

  const handleLogin = async () =>{
    let result = await fetch("http://localhost:8000/login",{
      method : "POST",
      body : JSON.stringify({email,password}),
      headers : {
        "Content-type" : "application/json"
      },
    })
    //console.log(result);
    result = await result.json();
    let userData =  (result as unknown as data);
    if(userData._id){
      localStorage.setItem('user', JSON.stringify(result));
      Navigate('/uploadimage');

    }else{
      alert("wrong credentails");
    }
  };

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Log In</Heading>
        <Input
          placeholder="Enter your email"
          type="email"
          name='email'
          variant="filled"
          mb={3}
          onChange = {(e: { target: { value: React.SetStateAction<string>; }; })=>setEmail(e.target.value)}
        />
        <Input
          placeholder="Enter Your Password"
          type="password"
          name='password'
          variant="filled"  
          mb={6}
          onChange = {(e: { target: { value: React.SetStateAction<string>; }; })=>setPassword(e.target.value)}
        />
        <Button colorScheme="teal" mb={8}
        onClick={handleLogin}>
          Log In
        </Button>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Enable Dark Mode?
          </FormLabel>
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </FormControl>
        <Box paddingTop={'5'}>
        New to us?{" "}
        <Link color="teal.500" to={'/signup'} >
          Sign Up
        </Link>
      </Box>
      </Flex>
    </Flex>
  );
};

export default Login;
