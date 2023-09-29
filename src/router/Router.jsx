import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import auth_routes from './Routes/Auth'
import public_routes from './Routes/Pubic'
import private_routes from './Routes/Private'

const Router = () => {

    const allRoutes = [...auth_routes, ...public_routes, ...private_routes]

    return (
        <BrowserRouter>
            <Routes>
                {allRoutes.map((route, index) => {
                    const { path, element: ElementChild } = route
                    return (<Route key={route + index} path={path} element={<ElementChild />} />)
                })}
            </Routes>
        </BrowserRouter>
    )
}

export default Router