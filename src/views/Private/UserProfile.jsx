import React from 'react'
import { Edit } from 'react-feather'
import { Card, CardBody } from 'reactstrap'

const UserProfile = () => {
  return (
    <div>
      <Card className='mx-auto my-5 position-relative border-black' style={{width: "400px", maxWidth: "90%"}}>
        <button className="position-absolute btn" style={{inset: "0px 0px auto auto", outline: "none", border: "none"}}><Edit size={15}/></button>
        <CardBody>
          <img width={"75px"} src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" alt="" className="d-block m-auto rounded-circle border mb-4" />
          <div className="d-flex align-items-center mb-4">
            <h6 className="fw-bolder flex-grow-1 m-0">Name: </h6><p className='flex-grow-1 text-primary m-0'>Name</p>
          </div>
          <div className="d-flex align-items-center mb-4">
            <h6 className="fw-bolder flex-grow-1 m-0">Age: </h6><p className='flex-grow-1 text-primary m-0'>Age</p>
          </div>
          <div className="d-flex align-items-center mb-4">
            <h6 className="fw-bolder flex-grow-1 m-0">Gender: </h6><p className='flex-grow-1 text-primary m-0'>Gender</p>
          </div>
          <div className="d-flex align-items-center mb-4">
            <h6 className="fw-bolder flex-grow-1 m-0">Company: </h6><p className='flex-grow-1 text-primary m-0'>Company</p>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default UserProfile