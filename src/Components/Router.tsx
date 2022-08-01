import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import ImageUpload from './ImageUpload'
import Login from './Login'
import PrivateComopent from './PrivateComopent'
import SignUp from './SignUp'

import axios from 'axios'
import { useState } from 'react'


const Router = () => {


  const [data , setData] = useState("");  

  function getDataPromise() {
    return axios({
            url: "http://localhost:8000/getdata",
            method: 'post',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
            }
        })
       .then(res => res.data)
       .catch (err => console.error(err))
       
    }

getDataPromise()
.then(res => setData(res));



  return (
    <>
    <Routes>
    <Route path='/' element={<Homepage/>} />
    <Route element={<PrivateComopent/>}>
    <Route path='/uploadimage' element={<ImageUpload/>} />
    </Route>
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<SignUp/>} />
    </Routes>

    </>
  )
}

export default Router