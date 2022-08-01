import  * as React from 'react'
import {Navigate , Outlet} from 'react-router-dom'

const PrivateComopent = () => {
    const auth = localStorage.getItem('user');
    return auth ? <Outlet/> : <Navigate to = "/"/>
}

export default PrivateComopent