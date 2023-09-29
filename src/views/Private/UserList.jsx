// import axios from 'axios'
// import React, { useEffect } from 'react'

import { Table } from "reactstrap"

const UserList = () => {

  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: "https://assignment.8848digitalerp.com/api/method/assignment.API.all_users_api.get_user"
  //   }).then((data) => {
  //     console.log({ data })
  //   }).catch((error) => {
  //     alert(error)
  //   })
  // }, [])
  return (
    <div className="p-3">
      <h3 className='mb-3 text-primary fw-bolder text-center'>Listing</h3>
      <div className="border">
        <Table responsive bordered striped className="m-0">
          <tbody>
            <tr>
              <th className="text-center">Name</th>
              <th className="text-center">Age</th>
              <th className="text-center">Gender</th>
              <th className="text-center">Company</th>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default UserList