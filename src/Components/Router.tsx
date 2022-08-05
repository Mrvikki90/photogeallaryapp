import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import ImageUpload from './ImageUpload'
import Login from './Login'
import PrivateComopent from './PrivateComopent'
import SignUp from './SignUp'
import Private from './Private'


const Router = () => {

  return (
    <>
    <Routes>
          
    <Route path='/private' element={<Private/>}/>
    <Route path='/' element={<Homepage/>} />
    <Route element={<PrivateComopent/>}>
    <Route path='/private' element={<Private/>}/>
    <Route path='/uploadimage' element={<ImageUpload/>} />
    </Route>
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<SignUp/>} />
    </Routes>
    </>
  )
}

export default Router