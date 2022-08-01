import * as React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Heading,
  Button,
} from '@chakra-ui/react'
import Wrapper from './Wrapper';
import { Navigate, useNavigate } from 'react-router-dom';

const ImageUpload = () => {

  const Navigate = useNavigate();

  const [title,  setTitle] = useState("");
  const [description,  setDescription] = useState("");
  const [image, setImage] = useState();
  const [keywords,  setkeyword] = useState("");
  const [imagetype,  setImageType] = useState("Public");

  const onChangeFile = (e) => {
    setImage(e.target.files[0]);
  }


  const changeOnClick = (e) =>{
    e.preventDefault();
  
  const formData = new FormData();

  formData.append("title",title);
  formData.append("description",description);
  formData.append("image",image);
  formData.append("keywords",keywords);
  formData.append("imagetype",imagetype);

  console.log(formData.getAll('imagetype'),imagetype);


  setTitle("");
  setDescription("");
  setkeyword("");
  setImageType("");

  axios.post('http://localhost:8000/uploadImage',formData)
  .then((res)=>{
    console.log(res);
    Navigate('/uploadimage');
  }).catch((err)=>{
    console.log(err);
  })
  }
  

  return (
    <Wrapper>
    <><Heading margin={'5'} textAlign={'center'}>Upload Image</Heading>
    <form action="" method='POST' encType='multipart/form-data' onSubmit={changeOnClick}>
      <FormControl display={'grid'} alignItems={'center'} justifyContent={'center'}>
        <Input type='hidden' value={''} name='id'/>
        <FormLabel>Title</FormLabel>
        <Input type='title' name='title'
          onChange = {(e)=>setTitle(e.target.value)} />
        <FormLabel>Description</FormLabel>
        <Input type='text' name='description' 
            onChange ={(e)=>setDescription(e.target.value)}/>
        <FormLabel>Select Image</FormLabel>
        <input
          type="file"
          name="image"
          onChange={onChangeFile}
        />
        <FormLabel>Write About image</FormLabel>
        <Input type='keywords' name='keywords'
            onChange = {(e)=>setkeyword(e.target.value)}/>
        <FormLabel>Image Type</FormLabel>
        <RadioGroup defaultValue='Public'>
            <Radio value='Public'onClick={(e)=>setImageType("Public")} >Public</Radio>
            <Radio value='Private'onClick={(e)=>setImageType("Private")} >Private</Radio>
        </RadioGroup>
        <Button
          mt={4}
          colorScheme='teal'
          type='submit'
        >
          Upload Image
        </Button>
      </FormControl>
      </form>
      </>
      </Wrapper>  
)}

export default ImageUpload
