import React from 'react'
import { ArrowRight } from 'react-feather'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='d-flex' style={{height: "100vh"}}>
        <div className="m-auto text-center">
            <h1 className='fw-bolder'>Welcome!</h1>
            <Link to={"/login/"} className='text-primary text-underline'>Go to Login Page <ArrowRight size={16} /></Link>
        </div>
    </div>
  )
}

export default Home