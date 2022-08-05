import React, { useEffect, useState } from 'react'
import { Input, Stack, FormControl, Button, Box, Image, Badge, Grid } from '@chakra-ui/react'
import Wrapper from './Wrapper'
import axios from 'axios'
import '../App.css';


const Homepage = () => {

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
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios({
      url: "http://localhost:8000/getdata",
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }

  let inputHandler = (e: { target: { value: string; }; }) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const url = "http://localhost:8000/image/"

  return (
    <>
      <Wrapper>
        <Stack spacing={3}>
          <FormControl display={'flex'} alignItems='center' justifyContent={'center'} >
            <Input id='search' type='search' margin='5' border='4px' borderColor='black' onChange={inputHandler} placeholder='Search images' w={'80'} />
          </FormControl>
        </Stack>
      </Wrapper>

      <Grid templateColumns='repeat(3,1fr)' gap={6}>
        {
          inputText === "" ?
            data.map((elem) => {
              return (
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
            :
            <>
              {
                data.filter((item) => item.title.includes(inputText)).map((item)=>{
                  return (
                    <Box maxW='sm' display='grid' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                      <Image src={url + item.imagename} alt={'noimage'} height='500' width='full' />
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
                        { }
                        </Box>
                        <Box>
                          { }
                          <Box as='span' color='gray.600' fontSize='sm'>
                            / wk
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                  )
                })
              }
            </>
        }
      </Grid>
    </>
  )
}

export default Homepage