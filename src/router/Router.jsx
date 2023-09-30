import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import auth_routes from './Routes/Auth'
import public_routes from './Routes/Pubic'
import private_routes from './Routes/Private'
import Authentication from '../views/Private/Authentication'

const Router = () => {

    const unauthorised = [...auth_routes, ...public_routes]
    const authorised = [...private_routes]

    return (
        <BrowserRouter>
            <Routes>
                {unauthorised.map((route, index) => {
                    const { path, element: ElementChild } = route
                    return (<Route key={route + index} path={path} element={<ElementChild />} />)
                })}
                {authorised.map((route, index) => {
                    const { path, element: ElementChild } = route
                    return (<Route key={route + index} path={path} element={<Authentication ><ElementChild /></Authentication>} />)
                })}
            </Routes>
        </BrowserRouter>
    )
}

export default Router