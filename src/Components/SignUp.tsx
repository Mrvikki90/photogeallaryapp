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
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';


const SignUp = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  const Navigate =  useNavigate();

  const[name ,setName] = useState("");
  const[email ,setEmail] = useState("");
  const[password ,setPassword] = useState("");

  const handelSignUp = async () => {
    let result = await fetch("http://localhost:8000/signup",{
      method : 'POST',
      body : JSON.stringify({name,email,password}),
      headers : {
        'Content-Type' : 'application/json'
      },
    });

    result = await result.json();
    console.log(result);
    if(result){
      alert("Rigestration succesfully completed");
      Navigate('/ImageUpload');
    }else{
      alert("enter credentails");
    }}

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Sign Up</Heading>
        <Input
          placeholder="Enter Your Name"
          type="name"
          name='name'
          variant="filled"
          mb={3}
          onChange = {(e: { target: { value: React.SetStateAction<string>; }; })=>setName(e.target.value)}
        />
        <Input
          placeholder="Enter Your Email"
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
        <Button onClick={handelSignUp}
        colorScheme="teal" mb={8}>
          Sign Up
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
          Already Have an Acoount?
        <Link color="teal.500" to={'/login'} >
          Login
        </Link>
      </Box>
      </Flex>
    </Flex>
  );
};

export default SignUp;
