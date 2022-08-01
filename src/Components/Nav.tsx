import * as React from 'react';
import { Button,Flex,Stack, useDisclosure} from '@chakra-ui/react'
import {Link, useNavigate} from 'react-router-dom';

const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
      localStorage.clear();
      navigate('/');
  }
  return (
    <>
 <Flex bg={'#282827'} color='white' h={'70px'} fontSize={'larger'} alignItems='center' justifyContent={'space-between'}  >
 <Flex w='100px' h={'60px'}>
    <img src="./images/ome.png" alt="images" />
 </Flex>

 <Flex  alignItems='center' padding={'10'} justifyContent={'space-between'} >
 {  auth ? <> 
  <Link to={'/uploadimage'}>Upload Image </Link>
  <Link onClick={logout}  to={'/'}><Button colorScheme='pink' variant='solid'>
    Logout
  </Button> </Link> 
    </>
    :
    <>
 <Link to={'/login'}><Button colorScheme='pink' variant='solid'>
    Login In
  </Button> </Link> 
  <Link to={'/signup'}><Button  colorScheme='blue' variant='outline'>
    Sign up
  </Button></Link>
  </>
 }
 </Flex>
</Flex>
     
    </>
  )
}


export default Nav