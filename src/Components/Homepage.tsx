import React, { useEffect, useState } from 'react'
import { Input , Stack,FormControl,Button} from '@chakra-ui/react'
import Wrapper from './Wrapper'
import axios from 'axios'
import '../App.css';

const Homepage = () => {

  const [data , setData] = useState([]);  

 useEffect(() => {
  axios({
    url: "http://localhost:8000/getdata",
    method: 'post',
    timeout: 8000,
    headers: {
        'Content-Type': 'application/json',
    }
})
.then(res => setData(res.data))
.catch (err => console.error(err))
 
 },[])

  return (
<>

<Wrapper>
<Stack spacing={3}>
<FormControl  display={'flex'} alignItems='center' justifyContent={'center'} >
<Input id='search' type='search' placeholder='Search images' w={'80'} />
<Button margin={'1.5'} colorScheme='teal' type='submit'>Search</Button>
</FormControl>
</Stack>










</Wrapper>
</>
  )
}

export default Homepage