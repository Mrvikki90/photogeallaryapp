import { Badge, Box, Button, Flex, Grid,Image} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Private = () => {

interface img {
    map(arg0: (elem: any) => JSX.Element): img;
    id: string;
    title: string;
    description: string;
    imageurl: string;
    imagename: string;
    keywords: string;
    Image_type: string;
    CreatedAt: number;
  }

  const [data, setData] = useState<img[]>([]);
  console.log(data);
  useEffect(() => {
      getData();
    }, []);
 
    const getData = () => {

        axios({
            url: "http://localhost:8000/private",
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
            }
          })
            .then(res => setData(res.data))
            .catch(err => console.error(err));
        }

  const url = "http://localhost:8000/image/"
       
  return(
<>
<Flex bg={'#282827'} color='white' h={'70px'} fontSize={'larger'} alignItems='center' justifyContent={'space-between'}  >
 <Flex w='100px' h={'60px'}>
    <img src="./images/ome.png" alt="images" />
 </Flex>

 <Flex  alignItems='center' padding={'10'} justifyContent={'space-between'} >
  <Flex display="flex" justifyContent='space-between' padding={'20'}>
  <Link to={'/private'}>privateImages</Link>
  <Flex marginLeft="20"></Flex>
  <Link to={'/uploadimage'}>Upload Image </Link>
  </Flex> 
  </Flex>
  </Flex>
     <Grid templateColumns='repeat(3,1fr)' gap={6}>
     {
        data.map((elem)=>{
            return(
     <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                  <Image src={url + elem.imagename} alt={'noimage'} height='500' width='full' />
                  <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                      <Badge borderRadius='full' px='2' colorScheme='teal'>
                        New
                      </Badge>
                    </Box>
                    <Box
                      mt='1'
                      fontWeight='semibold'
                      as='h4'
                      lineHeight='tight'
                      noOfLines={1}
                    >
                      {elem.description}
                    </Box>
                    <Box>
                      { elem.keywords}
                    </Box>
                  </Box>
                </Box>
            )
               })
        }  
        
     </Grid>
    
    
    </>
  )
}

export default Private