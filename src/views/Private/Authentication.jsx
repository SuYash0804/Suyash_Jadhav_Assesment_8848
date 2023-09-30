import React, { useContext, useState } from 'react'
import { ArrowRight } from 'react-feather'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Helper/Context'

const Authentication = ({ children }) => {
    
    const {contextState} = useContext(UserContext)
    const authenticated = JSON.parse(localStorage.getItem("authentication")) || contextState.authenticated

    console.log(authenticated)
    return (
        <>
            {!authenticated ? (
                <div className='d-flex' style={{ height: "100vh" }}>
                    <div className="m-auto text-center">
                        <h1 className='fw-bolder'>You are not logged in</h1>
                        <Link to={"/login/"} className='text-primary text-underline'>Go to Login Page <ArrowRight size={16} /></Link>
                    </div>
                </div>
            ) : (<div>{children}</div>)}
        </>
    )
}

export default Authentication